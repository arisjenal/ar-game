(() => {
  const questionsDatabase = {
    easy: [
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Aktifitas', 'Aktivitas', 'Atifitas', 'Akfitas'],
        answers: ['Aktivitas']
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Ajdan', 'Ajan', 'Azdan', 'Azan'],
        answer: 'Azan'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Rezeki', 'Rejeki', 'Rejekii', 'Rezekii'],
        answer: 'Rezeki'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Essay', 'Essai', 'Esay', 'Esai'],
        answer: 'Esai'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Pavorit', 'Favorit', 'Faforit', 'Favoritt'],
        answer: 'Favorit'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Aktivv', 'Aktip', 'Aktif', 'Aktiv'],
        answer: 'Aktif'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Finis', 'Finish', 'Pinis', 'Finiss'],
        answer: 'Finis'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Derazad', 'Derajaz', 'Derajad', 'Derajat'],
        answer: 'Derajat'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Hadist', 'Hadis', 'Adis', 'Hazis'],
        answer: 'Hadis'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Ijasah', 'Ijasa', 'Ijazah', 'Izasah'],
        answer: 'Ijazah'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Intropeksi', 'Introspeksi', 'Interofeksi', 'Interopeksi'],
        answer: 'Introspeksi'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Kaoss', 'Kaos', 'Kauss', 'Kaus'],
        answer: 'Kaus'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Kedaluwarsa', 'Kadaluwarsa', 'Kaluwarsa', 'Kedaluwarsaa'],
        answer: 'Kedaluwarsa'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Organisasi', 'Organisai', 'Organisaze', 'Organisazi'],
        answer: 'Organisasi'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Kulifikasi', 'Kwalifikasi', 'Kualifikasi', 'Kwalifikassi'],
        answer: 'Kualifikasi'
      }
    ],
    medium: [
      {
        question: 'Manakah kata baku?',
        options: [
          'Azas',
          'Adjas',
          'Asas',
          'Ajas'
        ],
        answer: 'Asas'
      },
      {
        question: 'Manakah kata baku?',
        options: [
          'Apotek',
          'Apoteker',
          'Apotik',
          'Tokoh Obat'
        ],
        answer: 'Apotek'
      },
      {
        question: 'Manakah kata baku?',
        options: [
          'Berfikir',
          'Pikirr',
          'Berpikir',
          'Bepikir'
        ],
        answer: 'Berpikir'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Jendral', 'Jenderal', 'Jendrall', 'Jenral'],
        answer: 'Jenderal'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Jagaz', 'Zagat', 'Jagad', 'Jagat'],
        answer: 'Jagat'
      },
      {
        question: 'Manakah kata baku?',
        options: [
          'Nasihat',
          'Nasehat',
          'Nasehatt',
          'Naseht'
        ],
        answer: 'Nasihat'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Aprat', 'Aparat', 'Abarat', 'Aparatur'],
        answer: 'Aparat'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Cerminn','Bercermin','Kacaa','Becermin'],
        answer: 'Becermin'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Bunker', 'Bangker', 'Bongker', 'Bungker'],
        answer: 'Bungker'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Embus', 'Hembus', 'Hembul', 'Hemmus'],
        answer: 'Embus'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Ensiklopedi', 'Esiklopedia', 'Ensiklopedia', 'Ensilopedia'],
        answer: 'Ensiklopedia'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Igenis', 'Higieniss', 'Higienis', 'Higenis'],
        answer: 'Higienis'
      },
      {
        question: 'Manakah kata baku?',
        options: [
          'Hingar-Bingar',
          'Igar-Ingar',
          'Ingar-Bingar',
          'Ingar-Ingar'
        ],
        answer: 'Ingar-Bingar'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Inkognito', 'Ingnito', 'Incogito', 'Incognito'],
        answer: 'Inkognito'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Jubilum', 'Julum', 'Jubileum', 'Jubilum'],
        answer: 'Jubileum'
      }
    ],
    hard: [
      {
        question: 'Manakah kata baku yang benar?',
        options: [
          'Hipovitaminose',
          'Hipovitaminosis',
          'Hipovitamin',
          'Hipovitaminos'
        ],
        answer: 'Hipovitaminosis'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: [
          'Afdol',
          'Afdal',
          'Afdil',
          'Afil'
        ],
        answer: 'Afdal'
      },
      {
        question: 'Manakah kata baku dari kata "Hambar"?',
        options: ['Tidak berasa', 'Basi', 'Busuk', 'Hambar'],
        answer: 'Tidak Berasa'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Dana', 'Donasi', 'Donatur', 'Pemberii'],
        answer: 'Donatur'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Maizena', 'Mazena', 'Masena', 'Maisena'],
        answer: 'Maizena'
      },
      {
        question: 'Manakah kata baku yang benar?',
        options: ['Nakoda', 'Nahkoda', 'Nakhoda', 'Nangkoda'],
        answer: 'Nakhoda'
      },
      {
        question: 'Manakah kata baku untuk “Jualan”?',
        options: ['Menjual', 'Jualan', 'Penjualan', 'Jual'],
        answer: 'Penjualan'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Pandai', 'Jago', 'Pinter', 'Pintar'],
        answer: 'Pandai'
      },
      {
        question: 'Manakah kata baku dari “jalan-jalan”?',
        options: ['Berkeliliing', 'Jalan-Jalan', 'Berjalan-Jalan', 'Memutarr'],
        answer: 'Berjalan-jalan'
      },
      {
        question: 'Manakah kata baku?',
        options: [
          'Pleton',
          'Pelton',
          'Peton',
          'Peleton'
        ],
        answer: 'Peleton'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Reservoar', 'Reservoir', 'Reservor', 'Resevoar'],
        answer: 'Reservoir'
      },
      {
        question: 'Manakah kata baku dari istilah “efektif”?',
        options: ['Efektif', 'Efetif', 'Efektip', 'Efektiff'],
        answer: 'Efektif'
      },
      {
        question: 'Kata baku untuk “kalo” adalah ...',
        options: ['Kalo', 'Kalau', 'Kaloh', 'Kaloh'],
        answer: 'Kalau'
      },
      {
        question: 'Manakah kata baku?',
        options: [
          'Saklar',
          'Salar',
          'Sakar',
          'Sakelar'
        ],
        answer: 'Sakelar'
      },
      {
        question: 'Manakah kata baku?',
        options: ['Sepabor', 'Sepatbor', 'Sepakbo', 'Sepakbor'],
        answer: 'Sepatbor'
      }
    ]
  };

  const TOTAL_QUESTIONS = 15;

  let questions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let difficulty = 'easy';

  // Elements references
  const questionNumberEl = document.getElementById('question-number');
  const questionTextEl = document.getElementById('question-text');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const startBtn = document.getElementById('start-btn');
  const restartBtn = document.getElementById('restart-btn');
  const scoreDisplay = document.getElementById('score-display');
  const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');

  function shuffleArray(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function loadQuestions() {
    // Load questions by difficulty and randomize subset if more than 15 available
    let baseQuestions = questionsDatabase[difficulty] || questionsDatabase.easy;
    let qs = [...baseQuestions];
    shuffleArray(qs);
    questions = qs.slice(0, TOTAL_QUESTIONS);
  }

  function displayQuestion() {
    clearStatusClasses();
    if (currentQuestionIndex >= questions.length) {
      showScore();
      return;
    }
    const question = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
    questionTextEl.innerHTML = question.question;
    optionsEl.innerHTML = '';

    question.options.forEach(option => {
      const button = document.createElement('button');
      button.classList.add('option-btn');
      button.textContent = option;
      button.addEventListener('click', () => selectAnswer(button, question.answer));
      optionsEl.appendChild(button);
    });

    nextBtn.disabled = true;
    scoreDisplay.textContent = '';
  }

  function clearStatusClasses() {
    Array.from(optionsEl.children).forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'wrong', 'disabled');
    });
  }

  function selectAnswer(selectedBtn, correctAnswer) {
    // Disable all options after answering
    Array.from(optionsEl.children).forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
      if (btn.textContent === correctAnswer) {
        btn.classList.add('correct');
      }
    });

    if (selectedBtn.textContent === correctAnswer) {
      selectedBtn.classList.add('correct');
      score++;
    } else {
      selectedBtn.classList.add('wrong');
    }

    nextBtn.disabled = false;
  }

  function showScore() {
    questionNumberEl.textContent = '';
    questionTextEl.textContent = 'Game selesai!';
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
    startBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
    scoreDisplay.textContent = `Skor kamu: ${score} dari ${questions.length}`;

    // Scroll to score display for user clarity
    scoreDisplay.scrollIntoView({behavior: "smooth"});
  }

  function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    loadQuestions();
    displayQuestion();
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true;
    startBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    scoreDisplay.textContent = '';
  }

  difficultyRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      difficulty = e.target.value;
      // Reset some UI if difficulty changed before game start
      if (startBtn.style.display !== 'none') {
        scoreDisplay.textContent = '';
      }
    });
  });

  startBtn.addEventListener('click', () => {
    resetGame();
  });

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showScore();
    }
  });

  restartBtn.addEventListener('click', () => {
    startBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    questionNumberEl.textContent = '';
    questionTextEl.textContent = '';
    optionsEl.innerHTML = '';
    scoreDisplay.textContent = '';
  });

})();