import React from "react";

export default function Index({ articles, app_name }) {
    return (
        <div>
            {articles.map((article) => (
                <li key={article.id}>{article.title}</li>
            ))}
            <h1>{app_name}</h1>
        </div>
    );
}
