import  pg  from  "pg"
function  connectDatabase(){
	const  pool = new  pg.Pool ({

		user :  'postgres',
		password :  '',
		database :  'jwtdb',
		host :  'localhost'

	})
		return  pool
	}
export { connectDatabase }