// Объект для хранения переводов
const i18n = {
    en: {
        name: "Saveliy Danko | Software Engineer",

        Russia: "Russia",

        intro1: "I am a student at ITMO University, majoring in Software Engineering with a specialization in System Programming and Software Development. I’m passionate about building applications and constantly improving my skills by working on new projects and experimenting with different technologies.",
        intro2: "I actively follow modern IT trends and strive for a deep understanding of software system architecture. In my free time, I enjoy playing volleyball, living in Saint Petersburg, and simply making the most of life by balancing personal growth with professional development.",
        intro3: "This website is my personal project. In the future, it will feature articles, photos, project descriptions, and other content that reflects my work, interests, and journey in the field of software development.",
        
        hardtitle: "Hard-Skills",
        hard1: "🖥️ Programming Languages",
        hard2: "🛠️ Frameworks & Tools",
        hard3: "🗄️ Databases",
        hard4: "🌐 Web Development",
        hard5: "🌍 Languages",
        lang1: "English — B2 (Upper-Intermediate)",
        lang2: "Russian — Native",

        web1: "Fundamentals of frontend development",
        web2: "Creating responsive user interfaces",
        web3: "Experience working with REST APIs",

        softtitle: "Soft-Skills",
        soft1: "Communication — able to work effectively in a team and express ideas clearly",
        soft2: "Stress resistance — stay calm and productive under pressure",
        soft3: "Responsibility — complete tasks on time and follow through",
        soft4: "Adaptability — quickly adjust to new environments and challenges",
        soft5: "Friendliness — contribute to a positive and supportive team atmosphere",
        soft6: "Curiosity — always learning and exploring new technologies",

        articles: "Articles",
    },

    ru: {
        name: "Савелий Данько | Инженер-разработчик",

        Russia: "Россия",

        intro1: "Я студент Университета ИТМО, обучаюсь на направлении «Программная инженерия» со специализацией в системном программировании и разработке ПО. Мне нравится создавать приложения и постоянно прокачивать навыки, работая над новыми проектами и экспериментируя с различными технологиями.",
        intro2: "Я слежу за современными IT-трендами и стремлюсь глубоко понимать архитектуру программных систем. В свободное время увлекаюсь волейболом, живу в Санкт-Петербурге и стараюсь максимально эффективно сочетать личностное развитие с профессиональным.",
        intro3: "Этот сайт — мой личный проект. В будущем здесь появятся статьи, фото, описания проектов и другие материалы, которые отражают мою работу, интересы и путь в сфере разработки.",
      
        hardtitle: "Хард-скиллы",
        hard1: "🖥️ Языки программирования",
        hard2: "🛠️ Фреймворки и инструменты",
        hard3: "🗄️ Базы данных",
        hard4: "🌐 Веб-разработка",
        hard5: "🌍 Языки",
        lang1: "Английский — B2 (выше среднего)",
        lang2: "Русский — родной",

        web1: "Основы фронтенд-разработки",
        web2: "Создание адаптивных пользовательских интерфейсов",
        web3: "Опыт работы с REST API",

        softtitle: "Софт-скиллы",
        soft1: "Коммуникация — эффективно работать в команде и ясно выражать мысли",
        soft2: "Стрессоустойчивость — сохранять спокойствие и продуктивность под давлением",
        soft3: "Ответственность — выполнять задачи в срок и доводить начатое до конца",
        soft4: "Адаптивность — быстро приспосабливаться к новым условиям и вызовам",
        soft5: "Доброжелательность — поддерживать позитивную и дружелюбную атмосферу в команде",
        soft6: "Любознательность — постоянно учиться и исследовать новые технологии",

        articles: "Статьи",
    },
  };
  
  /**
   * Устанавливает язык на всей странице,
   * заменяя текст по атрибуту data-key
   * @param {string} lang 'en' или 'ru'
   */
  function setLanguage(lang) {
    // Получаем все элементы, которые нужно перевести
    const elementsToTranslate = document.querySelectorAll("[data-key]");
  
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-key");
      element.textContent = i18n[lang][key];
    });
  }
  
  // Функция для переключения темы
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
  
    // Сохраняем текущее состояние темы в localStorage
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  
  // Функция для переключения языка
  function toggleLanguage() {
    // Получаем текущий язык из localStorage (если нет, берём 'en')
    const currentLang = localStorage.getItem("lang") || "en";
    const newLang = currentLang === "en" ? "ru" : "en";
  
    // Устанавливаем новый язык
    setLanguage(newLang);
  
    // Сохраняем новый язык в localStorage
    localStorage.setItem("lang", newLang);
  }
  
  // При загрузке документа инициализируем тему и язык
  document.addEventListener("DOMContentLoaded", () => {
    // Восстанавливаем тему
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  
    // Восстанавливаем язык
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  
    // Навешиваем слушатели на кнопки
    const themeToggleBtn = document.getElementById("theme-toggle");
    const langToggleBtn = document.getElementById("lang-toggle");
  
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        toggleTheme();
      });
    }
  
    if (langToggleBtn) {
      langToggleBtn.addEventListener("click", () => {
        toggleLanguage();
      });
    }
  });
  