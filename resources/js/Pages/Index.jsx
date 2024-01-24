import React from "react";
import NavigationBar from "../Component/NavigationBar";

export default function Index({ articles, app_name }) {
    return (
        <div>
            <NavigationBar />
            {articles.map((article) => (
                <p className=" text-xl" key={article.id}>
                    {article.title} + {app_name}
                </p>
            ))}
        </div>
    );
}
