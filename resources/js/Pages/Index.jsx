import React, { useState } from "react";
import { router } from "@inertiajs/react";
import NavigationBar from "../Component/NavigationBar";

export default function Index({ articles, app_name }) {
    const [inputForm, setInputForm] = useState(null);

    const handleChange = (e) => {
        setInputForm(e.target.value);
        console.log(inputForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/articles", { title: inputForm });
    };

    return (
        <div>
            <NavigationBar />
            {articles.map((article) => (
                <p className=" text-xl" key={article.id}>
                    {article.title} + {app_name}
                </p>
            ))}
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
