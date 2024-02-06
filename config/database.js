// module.exports = ({env}) => ({
//   connection:{
//     client: 'postgres',
//     connection:{
//         host: env('DATABASE_HOST'),
//         port: env('DATABASE_PORT'),
//         database: env('DATABASE_NAME'),
//         user: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//         ssl: env.bool('DATABASE_SSL')
//     }

//   }

// })


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST'),
//       port: env.int('PGPORT'),
//       database: env('PGDATABASE'),
//       user: env('PGUSER'),
//       password: env('PGPASSWORD'),
//       ssl: env.bool(true),
//     },
//     pool: { min: 0 }
//   },
// });

module.exports = ({ env }) => ({
  connection: {
      client: 'postgres',
      connection: {
          connectionString: env('DATABASE_URL')
      },
      pool: { min: 0 }
  }
});
