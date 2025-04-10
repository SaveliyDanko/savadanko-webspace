const articles = [
  { file: 'JavaLowLevel.md', title: 'Java Low Level' },
  // { file: 'my-second-article.md', title: 'My Second Article' },
  // и т.д.
];

// После загрузки DOM формируем ссылки в #articles-list
window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('articles-list');
  
  articles.forEach(article => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `article.html?file=${article.file}`;
    a.textContent = article.title;
    li.appendChild(a);
    list.appendChild(li);
  });
});
