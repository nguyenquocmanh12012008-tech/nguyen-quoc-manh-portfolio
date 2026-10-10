export const profile = {
  name: 'Nguyen Quoc Manh',
  initials: 'QM',
  university: 'Hanoi University of Science and Technology (HUST)',
  major: 'Data Science',
  year: 'First-year student',
  location: 'Hanoi, Vietnam',
  email: 'nguyenquocmanh12012008@gmail.com',
  phone: '0385415417',
  github: 'https://github.com/nguyenquocmanh12012008-tech',
  facebook: 'https://www.facebook.com/nqmanh120108',
  linkedin: '',
  tagline: 'Data Science Student  ·  AI Enthusiast',
  about:
    "I'm a first-year Data Science student at HUST with a strong interest in artificial intelligence, machine learning, and software development. I enjoy understanding how algorithms and models work—not just copying code—and I value mathematical foundations, logical thinking, and patient problem-solving. My goal is to grow by studying the theory, experimenting carefully, and building practical projects on the way to becoming an AI Engineer.",
  values: ['Continuous learning', 'Logical thinking', 'Curiosity', 'Learning from mistakes'],
}

export const achievements = [
  { id: 'national-math-2024', title: 'Giải Ba Học sinh giỏi Quốc gia môn Toán', englishTitle: 'Third Prize — National Excellent Student Competition in Mathematics', competition: 'Kỳ thi Học sinh giỏi Quốc gia môn Toán', academicYear: '2024–2025', distinction: 'award' },
  { id: 'national-math-2025', title: 'Giải Khuyến khích Học sinh giỏi Quốc gia môn Toán', englishTitle: 'Consolation Prize — National Excellent Student Competition in Mathematics', competition: 'Kỳ thi Học sinh giỏi Quốc gia môn Toán', academicYear: '2025–2026', distinction: 'award' },
  { id: 'student-olympiad-2024', title: 'Huy chương Vàng Olympic học sinh và sinh viên toàn quốc', englishTitle: 'Gold Medal — National Student Olympiad', competition: 'Olympic học sinh và sinh viên toàn quốc', academicYear: '2024–2025', distinction: 'gold' },
  { id: 'vinh-math-2024', title: 'Giải Nhất môn Toán cấp Đại học Vinh', englishTitle: 'First Prize — Mathematics Competition at Vinh University', competition: 'Cuộc thi môn Toán cấp Đại học Vinh', academicYear: '2024–2025', distinction: 'first' },
  { id: 'vinh-math-2025', title: 'Giải Nhất môn Toán cấp Đại học Vinh', englishTitle: 'First Prize — Mathematics Competition at Vinh University', competition: 'Cuộc thi môn Toán cấp Đại học Vinh', academicYear: '2025–2026', distinction: 'first' },
] as const

export const skillGroups = [
  { name: 'Programming', icon: '⌘', skills: [{ name: 'Python', level: 'Learning' }] },
  { name: 'Data Science', icon: '◫', skills: [{ name: 'NumPy', level: 'Learning' }, { name: 'Pandas', level: 'Learning' }, { name: 'Matplotlib', level: 'Learning' }, { name: 'SQL', level: 'Learning' }, { name: 'Exploratory Data Analysis', level: 'Learning' }] },
  { name: 'Machine Learning', icon: '⌁', skills: [{ name: 'Scikit-learn', level: 'Learning' }, { name: 'Data preprocessing', level: 'Learning' }, { name: 'Model training & evaluation', level: 'Learning' }, { name: 'Classical ML algorithms', level: 'Learning' }] },
  { name: 'Deep Learning & AI', icon: '✳', skills: [{ name: 'PyTorch', level: 'Learning' }, { name: 'Neural Networks', level: 'Learning' }, { name: 'CNN', level: 'Learning' }, { name: 'Computer Vision', level: 'Exploring' }, { name: 'Natural Language Processing', level: 'Exploring' }] },
  { name: 'Tools', icon: '⌘', skills: [{ name: 'Git', level: 'Learning' }, { name: 'GitHub', level: 'Learning' }, { name: 'Visual Studio Code', level: 'Familiar' }, { name: 'Jupyter Notebook', level: 'Familiar' }] },
] as const

export const projects = [
  { id: 'rice-disease', title: 'Rice Plant Disease Classification', category: 'Computer Vision', description: 'An image classification project exploring how to identify diseases in rice plants and distinguish unhealthy plants from healthy ones.', technologies: ['Python', 'PyTorch', 'CNN', 'Image Processing'], dataset: 'Paddy Doctor (if used)', status: 'Learning / In Progress', availability: 'Coming Soon', accent: 'mint' },
  { id: 'nlp-text', title: 'NLP Text Classification', category: 'Natural Language Processing', description: 'An experiment with text processing, Bag of Words, TF-IDF, and machine learning models for text classification.', technologies: ['Python', 'Scikit-learn', 'CountVectorizer', 'TF-IDF', 'Multinomial Naive Bayes'], status: 'Learning / Experiment', availability: 'Coming Soon', accent: 'violet' },
  { id: 'experimentation-lab', title: 'AI Experimentation Lab', category: 'AI / Machine Learning', description: 'A growing collection of experiments for learning about algorithms, training workflows, model evaluation, and practical AI techniques.', technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch'], status: 'Planned / In Progress', availability: 'Coming Soon', accent: 'blue' },
] as const

export const learningJourney = [
  { title: 'Programming Foundations', detail: 'Python, problem-solving, and Git', status: 'Building foundations' },
  { title: 'Data Science Foundations', detail: 'NumPy, Pandas, visualization, and SQL', status: 'Learning' },
  { title: 'Machine Learning', detail: 'Preprocessing, ML algorithms, and evaluation', status: 'Learning next' },
  { title: 'Deep Learning', detail: 'Neural networks, CNNs, and PyTorch', status: 'Planned' },
  { title: 'AI Projects', detail: 'Building reproducible, practical projects', status: 'Planned' },
  { title: 'Deployment & Engineering', detail: 'APIs, testing, Docker, and model deployment', status: 'Long-term goal' },
] as const

export const exploring = [
  { icon: '◉', title: 'Computer Vision', detail: 'CNNs and YOLO', color: 'mint' },
  { icon: '文', title: 'NLP & Text', detail: 'Text classification', color: 'violet' },
  { icon: '✳', title: 'Large Language Models', detail: 'Foundations of fine-tuning', color: 'blue' },
  { icon: '⌁', title: 'Model Evaluation', detail: 'Careful experimentation', color: 'amber' },
  { icon: '{ }', title: 'Clean Python', detail: 'Maintainable, reproducible code', color: 'rose' },
] as const
