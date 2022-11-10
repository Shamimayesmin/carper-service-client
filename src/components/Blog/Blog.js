import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {
	useTitle('Blog')
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl">
						Frequently Asked Questions
					</h2>
					
					<div className="space-y-4">
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							What is the difference between SQL and NoSQL?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								<strong>SQL</strong>
								<br />
								 1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
								2.These databases have fixed or static or predefined schema.
								<br />
								3.These databases are not suited for hierarchical data storage.
								<br />
								4.These databases are best suited for complex queries
								<br />
								<strong>NoSQL</strong>
								<br />
								1.Non-relational or distributed database system.
								<br />
								2.They have dynamic schema
								<br />
								3.These databases are best suited for hierarchical data storage.
								<br />
								4.These databases are not so good for complex queries
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							What is JWT, and how does it work?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								<strong>JWT</strong> :
								<br />
								JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
								<br />
								<strong>How it works</strong> :
								<br />
								JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
								<br />
								A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.


							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							What is the difference between javascript and NodeJS?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								<strong>Jsvascript</strong> :
								<br />
								1.Javascript is a programming language that is used for writing scripts on the website. 
								<br />
								2.Javascript can only be run in the browsers.
								<br />
								3.It is basically used on the client-side.
								<br />
								4.Javascript is capable enough to add HTML and play with the DOM. 
								<br />
								5.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 
								<br />
								6.Javascript is used in frontend development.
								<br />

								<strong>NodeJS</strong> :
								<br />
								1.NodeJS is a Javascript runtime environment.
								<br />
								2.We can run Javascript outside the browser with the help of NodeJS.
								<br />
								3.It is mostly used on the server-side.
								<br />
								4.Nodejs does not have capability to add HTML tags.
								<br />
								5.V8 is the Javascript engine inside of node.js that parses and runs Javascript. 
								<br />
								6.Nodejs is used in server-side development.

							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							How does NodeJS handle multiple requests at the same time?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
							<br />
							If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
