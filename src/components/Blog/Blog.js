import React from "react";

const Blog = () => {
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 mb-8 dark:text-gray-400">
						Sagittis tempor donec id vestibulum viverra. Neque condimentum
						primis orci at lacus amet bibendum.
					</p>
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
								Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
								porttitor egestas tincidunt neque vehicula potenti.{" "}
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								Eleifend feugiat sollicitudin laoreet adipiscing bibendum
								suscipit erat?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								Justo libero tellus integer tincidunt justo semper consequat
								venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
								pretium sodales vel magna et massa euismod vulputate sed.{" "}
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
