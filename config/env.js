let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'bgulley',
	DBPASSWORD: 'musicmajor',
	DBHOST: 'ds046267.mlab.com:46267',
	DBNAME: 'inspire-server',
	SERVERNAME: 'dev-server'
}
// mongodb://bgulley:musicmajor@ds046267.mlab.com:46267/inspire-server

// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env