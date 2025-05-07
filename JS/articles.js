const articles = [
  { file: 'JavaLowLevel.md', title: 'Java Low Level' },
  { file: 'CFI.md', title: 'CFI' }
];

// После загрузки DOM формируем ссылки в #articles-list
window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('articles-list');
  
  articles.forEach(article => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `article.html?file=${encodeURIComponent(article.file)}`;
    a.textContent = article.title;
    li.appendChild(a);
    list.appendChild(li);
  });
});
