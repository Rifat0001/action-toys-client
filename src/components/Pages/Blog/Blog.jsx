const Blog = () => {
    return (
        <div className='md:px-36'>
            <div className="collapse collapse-plus bg-indigo-100 my-4">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>An access token is a credential that is issued by an authentication server after a user successfully authenticates. It is a string of characters that represents the user's identity and permissions. The access token is typically short-lived and has an expiration time. It is used to authorize the user's access to protected resources or services by including it in API requests.</p>
                    <p>A refresh token, on the other hand, is a long-lived credential also issued by the authentication server. It is used to obtain a new access token when the current access token expires. The refresh token is securely stored on the client-side and is sent to the authentication server to request a new access token. This process is known as a token refresh flow.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-indigo-100 my-4">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Comparing between SQL and NoSQL databases.
                </div>
                <div className="collapse-content">
                    <p>SQL databases are structured, with fixed schemas and good for complex relationships and transactions. NoSQL databases are flexible, schema-less, and suitable for unstructured data with high scalability requirements. SQL offers strong consistency, while NoSQL prioritizes scalability and performance.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-indigo-100 my-4">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features to build web applications and APIs, such as routing, middleware, and handling HTTP requests and responses. It is known for its simplicity, allowing developers to create server-side applications quickly.</p>
                    <p>
                        Nest.js is a progressive and extensible Node.js framework built on top of Express.js. It follows the modular and scalable architectural patterns of Angular to develop server-side applications. Nest.js provides features like dependency injection, decorators, and a powerful CLI. It is designed to enhance productivity and maintainability while promoting code reusability and testability.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-indigo-100 my-4">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>
                        The MongoDB aggregate framework is a feature that enables advanced data processing and analysis. It allows you to perform operations like grouping, filtering, sorting, and transforming data within a collection. It provides a flexible and powerful way to extract meaningful insights from your data using a pipeline-based approach.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;