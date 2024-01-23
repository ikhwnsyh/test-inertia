<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::query()->latest()->get();
        return inertia('Index', [
            'articles' => $articles,
            'app_name' => config('app.name'),
        ]);
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        //
    }
    public function show(Article $article)
    {
        return inertia('Show', [
            'article' => $article,
        ]);
    }

    public function edit(Article $article)
    {
        //
    }

    public function update(Request $request, Article $article)
    {
        //
    }
    public function destroy(Article $article)
    {
        //
    }
}
