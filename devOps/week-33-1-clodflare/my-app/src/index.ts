


const main: ExportedHandler<Env> = {
	fetch(request, env, ctx): Response {
		return new Response('Hello World!' + Math.random());
	}
}

export default main;
