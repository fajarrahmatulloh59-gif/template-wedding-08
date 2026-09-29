import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function guestbookApiPlugin(): Plugin {
  const dbPath = path.resolve(__dirname, 'data/guestbook.json');

  const readDb = () => {
    try {
      if (!fs.existsSync(dbPath)) {
        fs.mkdirSync(path.dirname(dbPath), {recursive: true});
        fs.writeFileSync(dbPath, '[]', 'utf-8');
      }
      return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    } catch {
      return [];
    }
  };

  const writeDb = (data: unknown) => {
    fs.mkdirSync(path.dirname(dbPath), {recursive: true});
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
  };

  return {
    name: 'guestbook-api',
    configureServer(server) {
      server.middlewares.use('/api/guestbook', (req, res, next) => {
        if (req.method === 'GET') {
          const data = readDb();
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const item = JSON.parse(body);
              const data = readDb();
              const newEntry = {
                id: 'gb-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
                name: String(item.name || '').trim(),
                message: String(item.message || '').trim(),
                attendance: item.attendance || 'present',
                createdAt: new Date().toISOString(),
              };
              data.unshift(newEntry);
              writeDb(data);

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 201;
              res.end(JSON.stringify({success: true, entry: newEntry, all: data}));
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({error: 'Invalid payload'}));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), guestbookApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
