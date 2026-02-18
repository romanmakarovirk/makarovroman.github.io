import { WebGLShader } from "./components/ui/web-gl-shader"
import { AnimatedGallery } from "./components/ui/animated-gallery"
import { useState, useEffect } from "react"
import "./index.css"

// Base URL for assets (handles GitHub Pages subdirectory)
const BASE = import.meta.env.BASE_URL

function App() {
  const [activeTab, setActiveTab] = useState("martial")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const revealOnScroll = () => {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
          el.classList.add('active')
        }
      })
    }
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function (e: Event) {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href) {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  const toggleStory = (id: string, btn: HTMLButtonElement) => {
    const content = document.getElementById(id)
    if (content && btn) {
      content.classList.toggle('expanded')
      btn.classList.toggle('expanded')
      btn.innerHTML = content.classList.contains('expanded')
        ? 'Свернуть <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>'
        : 'Читать полностью <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>'
    }
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* WebGL Shader Background - fixed behind everything */}
      <div className="fixed inset-0 z-0 bg-white">
        <WebGLShader />
      </div>
      
      {/* Original Portfolio Content - on top of WebGL background */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="glass fixed top-6 left-1/2 -translate-x-1/2 px-7 py-3 z-[100] flex gap-8 items-center">
          <a href="#story" className="text-text-secondary text-sm font-medium transition-colors hover:text-text-primary">История</a>
          <a href="#channel" className="text-text-secondary text-sm font-medium transition-colors hover:text-text-primary">Канал</a>
          <a href="#dev" className="text-text-secondary text-sm font-medium transition-colors hover:text-text-primary">Проекты</a>
          <a href="#achievements" className="text-text-secondary text-sm font-medium transition-colors hover:text-text-primary">Достижения</a>
          <a href="#sports" className="text-text-secondary text-sm font-medium transition-colors hover:text-text-primary">Спорт</a>
        </nav>

        {/* Hero Section */}
        <section className="hero min-h-screen flex items-center justify-center pt-0 px-8">
          <div className="hero-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-6xl">
            <div className="hero-content text-text-primary">
              <p className="hero-greeting mb-4 opacity-0 animate-fadeUp">Привет, я</p>
              <h1 className="hero-name mb-6 opacity-0 animate-fadeUp" style={{animationDelay: '0.2s'}}>
                Роман<br/><em>Макаров</em>
              </h1>
              <p className="hero-description max-w-md opacity-0 animate-fadeUp" style={{animationDelay: '0.4s'}}>
                15 лет. Иркутск. Зарабатываю с 10 лет, создаю проекты, снимаю видео и не боюсь работать руками.
              </p>
              <div className="hero-tags flex flex-wrap gap-2.5 mt-8 opacity-0 animate-fadeUp" style={{animationDelay: '0.6s'}}>
                <span className="hero-tag glass">💻 Разработчик</span>
                <span className="hero-tag glass">🎬 Контент-мейкер</span>
                <span className="hero-tag glass">🏋️ Спортсмен</span>
              </div>
            </div>
            <div className="hero-photo-wrapper relative opacity-0 animate-fadeIn" style={{animationDelay: '0.5s'}}>
              <img src={`${BASE}images/hero.jpg`} alt="Роман Макаров" className="hero-photo w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl" />
              <div className="hero-decoration absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-300/60 to-purple-300/50 backdrop-blur-sm border border-white/40 -z-10"></div>
              <div className="hero-decoration-2 absolute bottom-8 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300/50 to-red-300/40 backdrop-blur-sm border border-white/40 -z-10"></div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="story bg-[#f5f5f0] rounded-[32px] p-12 md:p-16 my-12 mx-auto max-w-6xl relative overflow-hidden">
          <div className="story::before absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/20 backdrop-blur-[30px] border border-white/30"></div>
          
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Мой путь</p>
            <h2 className="section-title">История становления</h2>
          </div>
          
          <div className="story-timeline flex flex-col gap-0 relative z-10">
            {/* Story Item 1 */}
            <div className="story-item grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 py-10 border-b border-black/6 reveal">
              <div className="story-meta text-right pr-6 border-r-2 border-accent md:text-right md:pr-6 md:border-r-2 md:border-b-0 text-left pl-0 border-l-0 border-b-2 pb-3">
                <div className="story-year">2019</div>
                <div className="story-age text-xs text-text-muted">10 лет</div>
              </div>
              <div className="story-content">
                <h3 className="story-heading">Первый заработок и майнинг</h3>
                <p className="story-preview text-text-secondary text-sm leading-relaxed">
                  Мои первые деньги я заработал занимаясь спортом — подтягиваясь. Папа замотивировал меня: 10 подтягиваний — 100 рублей. Через время я накопил 20 000 рублей и решился на рискованную инвестицию...
                </p>
                <div className="story-full max-h-0 overflow-hidden transition-all duration-500 opacity-0" id="story-1">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Мои первые деньги я заработал занимаясь спортом, а именно — подтягиваясь. У меня всегда плохо это получалось, хоть я и ходил на дзюдо с 4 лет и занимал первые места на соревнованиях. Так что папа решил замотивировать меня деньгами: 10 подтягиваний — 100 рублей. Это было очень тяжело, до сих пор помню, как шёл через себя ради заработка на игрушки, которые так хотел.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Но через какое-то время я решил, что игрушек по 1000 рублей мне мало, и тогда встал вопрос: «Как мне заработать больше?» Самое простое было начать больше подтягиваться — этим я и занялся. За какое-то время, участвуя в соревнованиях, накопил большую для меня сумму — 20 000 рублей.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Тогда папа увидел повод рассказать, как можно приумножить свой доход, имея голову и терпение. Он предложил мне условие: я покупаю две майнинг-машинки по 20 000 рублей каждая. Одну оплачиваю полностью сразу, а долг по другой мне даёт папа — и я отдам его с первой прибыли двух машинок.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Для меня очень трудно было решиться на такой шаг, так как эти деньги были заработаны очень тяжело. Но я решил довериться папе и рискнул. Это было, наверное, лучшее решение за мою жизнь. Потому что с того момента биткоин, который я майнил, начал расти, и я, купивший его по старой цене, зарабатывал столько, что мог себе позволить купить компьютер в 10 лет на свои деньги, а затем часы, VR-шлем и новый телефон. К слову, всё от Apple.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    На моём крипто-кошельке могли лежать десятки тысяч, а иногда и больше ста тысяч рублей — и всё это было в возрасте, когда мои сверстники просили деньги на попиты. С тех пор мой кругозор кардинально поменялся. Последняя моя покупка с тех денег была около двух лет назад, когда я продал VR-шлем и старый телефон и купил новый.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Но ничего не вечно, и моё оборудование устарело уже года три назад, а новые законы по тарифам окончательно убили бы весь доход, который оставался. Так что на этом моя история с добычей криптовалюты закончилась. Но это было только начало моего пути по заработку денег.
                  </p>
                  <div className="photo-gallery flex gap-3 mt-6 overflow-x-auto pb-2">
                    <img src={`${BASE}images/mining-wallet.png`} alt="Крипто-кошелёк" className="w-36 h-24 object-cover rounded-xl flex-shrink-0 transition-transform hover:scale-105 cursor-pointer" />
                    <img src={`${BASE}images/mining-childhood.jpg`} alt="Детство" className="w-36 h-24 object-cover rounded-xl flex-shrink-0 transition-transform hover:scale-105 cursor-pointer" />
                  </div>
                </div>
                <button 
                  className="story-toggle inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-soft rounded-full text-accent text-xs font-medium transition-all hover:bg-accent hover:text-white"
                  onClick={(e) => toggleStory('story-1', e.currentTarget)}
                >
                  Читать полностью <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>
            </div>

            {/* Story Item 2 */}
            <div className="story-item grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 py-10 border-b border-black/6 reveal">
              <div className="story-meta text-right pr-6 border-r-2 border-accent md:text-right md:pr-6 md:border-r-2 md:border-b-0 text-left pl-0 border-l-0 border-b-2 pb-3">
                <div className="story-year">2024</div>
                <div className="story-age text-xs text-text-muted">14 лет</div>
              </div>
              <div className="story-content">
                <h3 className="story-heading">Работа на автомойке</h3>
                <p className="story-preview text-text-secondary text-sm leading-relaxed">
                  Мой второй опыт заработка был ещё сложнее. Работа на робот-мойке с графиком три-два, включая ночные смены с 8 вечера до 8 утра. Три месяца я притворялся 18-летним...
                </p>
                <div className="story-full max-h-0 overflow-hidden transition-all duration-500 opacity-0" id="story-2">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Это был мой второй опыт своего заработка, но он был ещё сложнее, чем первый, так как я работал на робот-мойке. Не знаю, можно ли рассказывать, где конкретно, потому что скорее всего работодатель не имел права давать мне работу, так что не буду писать подробности. Но это большая сеть автомоек с отдельными опциями дополнительных услуг по салону, отличающая её от конкурентов, от чего очередь была постоянная.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Как я вообще туда попал — это интересная история. Мой папа регулярно моет там машину, и в одно из посещений ему порвали коврик, когда стирали его. Он попросил номер управляющего, и после разговора о коврике они продолжили разговор на другие темы. Они оба руководят людьми по работе, от чего всё перетекло в разговор о нехватке рабочих кадров в нашем городе. И тут папа предложил меня в качестве работника на летние каникулы.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Мой первый рабочий день был похож на фильмы про жизнь в Нью-Йорке: всё так быстро, люди ходят, кричат, заменяют друг друга, всё шумит — и параллельно мне рассказывают, что к чему и чем я буду заниматься. Часы проходили как минуты в таком темпе. Первый день просто выжал меня как тряпку, и я хотел сказать, что не смогу. Но понял: если сдамся — проиграю и огорчу папу, чего я не хотел делать.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    График у меня был три-два. Первый день я работал с 8 до 8, второй — с 8 утра до 12 ночи, и третью (ночную смену) — с 8 вечера до 8 утра. Самая сложная была ночная. Самая приятная — с 8 до 12, так как я получал 4000 за смену, и смотря на деньги, ни о чём не жалел.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Так и прошло всё лето, за исключением летнего лагеря по боксу, который был 2 недели на Байкале. Лето 2024 года я провёл работая. Заработал прилично. Сейчас я пишу с компьютера, на который работал — он стоит 155 000 рублей, именно тот, что я хотел. Так что не жалею ни разу.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Огромный опыт получил тем летом. И мои навыки лжи прокачались, так как три месяца я сочинял историю, будто мне 18 и я в 11 классе, потому что мои коллеги не должны были знать о моём возрасте. Я очень благодарен папе, моему начальнику и коллегам за такой опыт работы и общения со взрослыми людьми на равных.
                  </p>
                  <div className="photo-gallery flex gap-3 mt-6 overflow-x-auto pb-2">
                    <img src={`${BASE}images/carwash.jpg`} alt="Автомойка" className="w-36 h-24 object-cover rounded-xl flex-shrink-0 transition-transform hover:scale-105 cursor-pointer" />
                  </div>
                </div>
                <button 
                  className="story-toggle inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-soft rounded-full text-accent text-xs font-medium transition-all hover:bg-accent hover:text-white"
                  onClick={(e) => toggleStory('story-2', e.currentTarget)}
                >
                  Читать полностью <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>
            </div>

            {/* Story Item 3 */}
            <div className="story-item grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 py-10 border-b border-black/6 reveal">
              <div className="story-meta text-right pr-6 border-r-2 border-accent md:text-right md:pr-6 md:border-r-2 md:border-b-0 text-left pl-0 border-l-0 border-b-2 pb-3">
                <div className="story-year">2023</div>
                <div className="story-age text-xs text-text-muted">13 лет</div>
              </div>
              <div className="story-content">
                <h3 className="story-heading">Знакомство с ИИ</h3>
                <p className="story-preview text-text-secondary text-sm leading-relaxed">
                  Моё знакомство с искусственным интеллектом началось в 6 классе. Тогда я впервые попробовал работать с ChatGPT 3.5 и написал свой первый промт...
                </p>
                <div className="story-full max-h-0 overflow-hidden transition-all duration-500 opacity-0" id="story-3">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Моё знакомство с искусственным интеллектом началось в 6 классе. Тогда я впервые попробовал работать с ChatGPT 3.5 и написал свой первый промт. Уже после этого опыта мне стало понятно, что за подобными технологиями стоит будущее. Меня поразило, что программа может понимать текст, рассуждать и помогать решать задачи, которые раньше требовали участия человека.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    С этого момента мне стало интересно не просто пользоваться ИИ, а понять, как вообще работает технология, способная заменить или радикально изменить огромное количество профессий. Со временем интерес только усиливался: нейросети начали активно использоваться в программировании, дизайне, анализе данных. Я сам пробовал заниматься так называемым вайб-кодингом и на практике убедился, что сегодня даже человек без знания языков программирования может создать простой сайт или программу с помощью ИИ.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Однако довольно быстро я понял важную вещь: использовать инструменты искусственного интеллекта — это одно, а понимать, как они работают внутри, — совсем другое. Когда я начал читать статьи о нейронных сетях и машинном обучении, я столкнулся с математикой, которую пока не понимаю в полной мере. Линейная алгебра, матрицы, градиентный спуск, функции активации — всё это для меня сейчас сложная, но крайне интересная область. И в вашей школе я очень надеюсь познакомиться с этими разделами математики и углубиться в эту интересную сферу разработки.
                  </p>
                </div>
                <button
                  className="story-toggle inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-soft rounded-full text-accent text-xs font-medium transition-all hover:bg-accent hover:text-white"
                  onClick={(e) => toggleStory('story-3', e.currentTarget)}
                >
                  Читать полностью <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>
            </div>

            {/* Story Item 4 */}
            <div className="story-item grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 py-10 reveal">
              <div className="story-meta text-right pr-6 border-r-2 border-accent md:text-right md:pr-6 md:border-r-2 md:border-b-0 text-left pl-0 border-l-0 border-b-2 pb-3">
                <div className="story-year">2025</div>
                <div className="story-age text-xs text-text-muted">15 лет</div>
              </div>
              <div className="story-content">
                <h3 className="story-heading">Сегодня</h3>
                <p className="story-preview text-text-secondary text-sm leading-relaxed">
                  Поступаю в «Точку будущего» в Иркутске. Создаю IT-проекты, развиваю канал RZ_RM с командой из 9 человек, участвую в олимпиадах. Занимаюсь в тренажёрном зале, катаюсь на сноуборде, играю в страйкбол с друзьями.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Channel Section */}
        <section id="channel" className="channel-section bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-[32px] p-12 md:p-16 my-12 mx-auto max-w-6xl text-white relative overflow-hidden">
          <div className="channel-section::before absolute top-1/5 -left-24 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 backdrop-blur-[40px]"></div>

          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">Контент</p>
            <h2 className="section-title text-white">Канал RZ_RM</h2>
          </div>

          <div className="channel-grid grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center relative z-10">
            <div className="channel-info reveal">
              <h3 className="text-3xl mb-4 font-display">Мотопутешествия и квадроциклы</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                Этот канал мы создали с моим другом и нас объединяло желание путешествовать и снимать все это. Так и появился наш канал в котором на данный момент 9 человек по настоящему заинтересованных в развитии нашего комьюнити. А так же 522 настоящих подписчика следящие за нашими путешествиями.
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                Видео которые представлены ниже сняты и смонтированы мной, надеюсь вам понравится. Если захотите посмотреть больше — снизу есть ссылка на наш телеграмм канал.
              </p>
              <div className="channel-stats flex gap-8 my-6">
                <div className="channel-stat text-center">
                  <div className="channel-stat-value text-3xl text-white">522</div>
                  <div className="channel-stat-label text-xs text-white/50 uppercase tracking-wider">подписчика</div>
                </div>
                <div className="channel-stat text-center">
                  <div className="channel-stat-value text-3xl text-white">9</div>
                  <div className="channel-stat-label text-xs text-white/50 uppercase tracking-wider">человек в команде</div>
                </div>
              </div>
              <a href="https://t.me/rayzekss_makarov" className="channel-cta inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-text-primary rounded-full font-semibold text-sm transition-transform hover:scale-105 mt-4" target="_blank">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Смотреть канал
              </a>
            </div>
            <div className="channel-gallery grid grid-cols-2 gap-4 reveal">
              <img src={`${BASE}images/channel-team.jpg`} alt="Команда" className="w-full h-auto rounded-2xl transition-transform hover:scale-105 cursor-pointer" style={{ objectFit: 'contain' }} />
              <img src={`${BASE}images/channel-1.jpg`} alt="Поездка" className="w-full h-auto rounded-2xl transition-transform hover:scale-105 cursor-pointer" style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Видео с канала */}
          <div className="channel-videos mt-12 reveal">
            <h4 className="text-xl font-display text-center mb-6 text-white/80">Мои работы</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="video-card relative aspect-video rounded-2xl overflow-hidden bg-white/10 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                  onClick={() => setSelectedVideo(`${BASE}videos/channel-${num}.mp4`)}
                >
                  <video
                    src={`${BASE}videos/channel-${num}.mp4`}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const video = e.target as HTMLVideoElement
                      video.play().catch(() => {})
                    }}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement
                      video.pause()
                      video.currentTime = 0
                    }}
                  />
                  {/* Overlay с кнопкой воспроизведения */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-colors flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg">
                      <svg className="w-7 h-7 text-text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dev Section */}
        <section id="dev" className="dev-section py-16 px-8">
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Разработка</p>
            <h2 className="section-title">IT-проекты</h2>
          </div>
          {/* Hydra Project — Featured */}
          <div className="max-w-6xl mx-auto mb-8 reveal">
            <div className="dev-card glass rounded-3xl p-8 md:p-10 relative overflow-hidden transition-transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="dev-card-icon text-5xl">🐍</div>
                    <div>
                      <h3 className="text-2xl font-display">Hydra</h3>
                      <p className="text-xs text-accent font-semibold">Лучший проект смены</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Интеллектуальный помощник для создания учебных материалов с помощью LLM-моделей. Реализован в учебном центре «Персей» на курсе «Искусственный интеллект и машинное обучение». Проект был отмечен наградой от ЭН+ на итоговой защите с представителями компании.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Цель — создать продукт, который делает сжатый конспект лекций, используя лишь аудиозапись. Продукт работает как пайплайн из нескольких нейросетей: <span className="text-accent font-medium">Whisper large-v3</span> для перевода аудио в текст, <span className="text-accent font-medium">LanguageTool</span> для исправления ошибок, и <span className="text-accent font-medium">Qwen3-4B-Instruct-2507</span> для сжатия ~30 000 токенов сырого текста в готовый конспект.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    Мы достигли готового продукта, который работает локально на наших серверах без внешних облачных LLM-моделей — это делает его бесплатным и безопасным, так как данные не уходят с сервера.
                  </p>
                  <div className="dev-tags flex flex-wrap gap-2">
                    <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">AI/ML</span>
                    <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Whisper</span>
                    <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">LLM</span>
                    <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Python</span>
                    <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">ЭН+ Награда</span>
                  </div>
                </div>
              </div>
              {/* Фото с защиты */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(`${BASE}images/projects/hydra-1.jpg`)}
                >
                  <img
                    src={`${BASE}images/projects/hydra-1.jpg`}
                    alt="Защита проекта Hydra — презентация"
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
                <div
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(`${BASE}images/projects/hydra-2.jpg`)}
                >
                  <img
                    src={`${BASE}images/projects/hydra-2.jpg`}
                    alt="Награждение от ЭН+ за проект Hydra"
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dev-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* MakarovFlow Project */}
            <div className="dev-card glass rounded-3xl p-8 relative overflow-hidden transition-transform hover:-translate-y-1 reveal">
              <div className="dev-card-icon text-5xl mb-4">🧠</div>
              <h3 className="text-xl mb-3 font-display">MakarovFlow</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Telegram Mini App для контроля эмоционального состояния. Встроенный ИИ-агент анализирует сон, дневник и привычки, связывает данные за неделю и больше, находит что негативно влияет на состояние, а что благоприятно.
              </p>
              <div className="dev-tags flex flex-wrap gap-2 mt-4">
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Telegram</span>
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">AI</span>
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Школьный проект</span>
              </div>
              {/* Скриншоты проекта - 3 экрана телефона */}
              <div className="project-screenshots grid grid-cols-4 gap-3 mt-6">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="phone-mockup relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedImage(`${BASE}images/projects/makarovflow-${num}.jpg`)}
                  >
                    <img
                      src={`${BASE}images/projects/makarovflow-${num}.jpg`}
                      alt={`MakarovFlow скриншот ${num}`}
                      className="w-full aspect-[9/19] object-cover object-top rounded-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="190" viewBox="0 0 90 190"><rect fill="%23f3f4f6" width="90" height="190" rx="12"/><text x="45" y="95" text-anchor="middle" fill="%239ca3af" font-size="10">Скрин ' + num + '</text></svg>'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* SoloStyle Project */}
            <div className="dev-card glass rounded-3xl p-8 relative overflow-hidden transition-transform hover:-translate-y-1 reveal">
              <div className="dev-card-icon text-5xl mb-4">💼</div>
              <h3 className="text-xl mb-3 font-display">SoloStyle</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Приложение для западного рынка труда — аналог HH.ru. Люди находят исполнителей услуг за деньги, предприниматели находят клиентов. Приложение написано на языке Swift для iOS. Приложение адаптировано под русский и английский языки.
              </p>
              <div className="dev-tags flex flex-wrap gap-2 mt-4">
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Стартап</span>
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">AI</span>
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">iOS</span>
              </div>
              {/* Скриншоты проекта - 4 экрана телефона */}
              <div className="project-screenshots grid grid-cols-4 gap-3 mt-6">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="phone-mockup relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedImage(`${BASE}images/projects/solostyle-${num}.png`)}
                  >
                    <img
                      src={`${BASE}images/projects/solostyle-${num}.png`}
                      alt={`SoloStyle - ${num === 1 ? 'Calendar' : num === 2 ? 'Clients' : num === 3 ? 'Profile' : 'Settings'}`}
                      className="w-full aspect-[9/19] object-cover object-top rounded-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="190" viewBox="0 0 90 190"><rect fill="%23f3f4f6" width="90" height="190" rx="12"/><text x="45" y="95" text-anchor="middle" fill="%239ca3af" font-size="10">Скрин ' + num + '</text></svg>'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фото с разработки */}
          <div className="dev-photos mt-12 max-w-6xl mx-auto reveal">
            <p className="text-center text-text-muted text-sm mb-6">Процесс разработки</p>
            <AnimatedGallery
              images={[
                { src: `${BASE}images/projects/dev-process-1.jpg`, alt: "Процесс разработки 1" },
                { src: `${BASE}images/projects/dev-process-2.jpg`, alt: "Процесс разработки 2" },
                { src: `${BASE}images/projects/dev-process-3.jpg`, alt: "Процесс разработки 3" },
                { src: `${BASE}images/projects/dev-process-4.jpg`, alt: "Процесс разработки 4" },
              ]}
              autoplay
            />
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="achievements-section bg-[#f5f5f0] rounded-[32px] p-12 md:p-16 my-12 mx-auto max-w-6xl">
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Олимпиады</p>
            <h2 className="section-title">Достижения</h2>
          </div>

          {/* Региональный этап - главные достижения */}
          <div className="mb-10 reveal">
            <h3 className="text-lg font-display text-center mb-6 text-text-secondary">Региональный этап ВСОШ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { badge: "Участник", title: "История", year: "2024/25" },
                { badge: "Призёр", title: "Обществознание", year: "2024/25" },
                { badge: "Участник", title: "Экономика", year: "2024/25" },
              ].map((item, idx) => (
                <div key={idx} className={`achievement-card rounded-2xl p-5 border transition-transform hover:-translate-y-1 ${
                  item.badge === "Призёр" ? "bg-gradient-to-br from-[#7c7fff]/15 to-[#7c7fff]/5 border-[#7c7fff]/30" :
                  "bg-gradient-to-br from-gray-200/40 to-gray-100/30 border-gray-300/40"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      item.badge === "Призёр" ? "bg-gradient-to-r from-[#7c7fff] to-[#6a6aee]" :
                      "bg-gradient-to-r from-gray-400 to-gray-500"
                    }`}>{item.badge}</span>
                    <span className="text-xs text-text-muted">{item.year}</span>
                  </div>
                  <div className={`achievement-title font-semibold text-sm ${item.badge === "Призёр" ? "text-[#5a5abf]" : "text-text-secondary"}`}>{item.title}</div>
                  <div className="achievement-desc text-xs text-text-muted mt-1">Региональный этап</div>
                </div>
              ))}
            </div>
          </div>

          {/* Муниципальный этап */}
          <div className="mb-10 reveal">
            <h3 className="text-lg font-display text-center mb-6 text-text-secondary">Муниципальный этап ВСОШ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { badge: "Призёр", title: "Обществознание", year: "2024/25" },
                { badge: "Призёр", title: "История", year: "2024/25" },
                { badge: "Призёр", title: "Экономика", year: "2024/25" },
                { badge: "Призёр", title: "Обществознание", year: "2023/24" },
                { badge: "Призёр", title: "История", year: "2023/24" },
                { badge: "Призёр", title: "Экономика", year: "2023/24" },
              ].map((item, idx) => (
                <div key={idx} className="achievement-card bg-gradient-to-br from-[#7c7fff]/10 to-[#7c7fff]/5 rounded-2xl p-5 border border-[#7c7fff]/20 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7c7fff] to-[#6a6aee]">{item.badge}</span>
                    <span className="text-xs text-text-muted">{item.year}</span>
                  </div>
                  <div className="achievement-title font-semibold text-sm text-[#5a5abf]">{item.title}</div>
                  <div className="achievement-desc text-xs text-text-muted mt-1">Муниципальный этап</div>
                </div>
              ))}
            </div>
          </div>

          {/* Школьный этап */}
          <div className="reveal">
            <h3 className="text-lg font-display text-center mb-6 text-text-secondary">Школьный этап ВСОШ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { badge: "Призёр", title: "Информатика", year: "2024/25" },
                { badge: "Призёр", title: "Химия", year: "2024/25" },
                { badge: "Победитель", title: "Обществознание", year: "2024/25" },
                { badge: "Победитель", title: "История", year: "2024/25" },
                { badge: "Победитель", title: "Экономика", year: "2024/25" },
                { badge: "Победитель", title: "Обществознание", year: "2023/24" },
                { badge: "Победитель", title: "История", year: "2023/24" },
                { badge: "Победитель", title: "Экономика", year: "2023/24" },
              ].map((item, idx) => (
                <div key={idx} className={`achievement-card rounded-xl p-4 border transition-transform hover:-translate-y-1 ${
                  item.badge === "Победитель" ? "bg-gradient-to-br from-[#7c7fff]/20 to-[#5a5abf]/10 border-[#7c7fff]/30" :
                  "bg-gradient-to-br from-[#7c7fff]/10 to-[#7c7fff]/5 border-[#7c7fff]/15"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-white ${
                      item.badge === "Победитель" ? "bg-gradient-to-r from-[#6a5acd] to-[#7c7fff]" :
                      "bg-gradient-to-r from-[#7c7fff] to-[#6a6aee]"
                    }`}>{item.badge}</span>
                  </div>
                  <div className={`achievement-title font-semibold text-xs ${item.badge === "Победитель" ? "text-[#4a4a9f]" : "text-[#5a5abf]"}`}>{item.title}</div>
                  <div className="achievement-desc text-[10px] text-text-muted mt-0.5">{item.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grades Section */}
        <section id="grades" className="grades-section py-16 px-8">
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Успеваемость</p>
            <h2 className="section-title">Оценки</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Average Score Card */}
            <div className="glass rounded-3xl p-8 mb-8 text-center reveal">
              <div className="text-text-muted text-sm mb-2">Средний балл</div>
              <div className="text-5xl font-display text-accent font-semibold">4.35</div>
            </div>

            {/* Grades Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 reveal">
              {[
                { subject: "Английский язык", grade: 4 },
                { subject: "Биология", grade: 5 },
                { subject: "Вероятность и статистика", grade: 4 },
                { subject: "География", grade: 4 },
                { subject: "Индивидуальный проект", grade: 5 },
                { subject: "Информатика", grade: 5 },
                { subject: "История", grade: 4 },
                { subject: "Литература", grade: 4 },
                { subject: "ОБЗР", grade: 5 },
                { subject: "Обществознание", grade: 5 },
                { subject: "Русский язык", grade: 4 },
                { subject: "Труд (технология)", grade: 5 },
                { subject: "Физика", grade: 5 },
                { subject: "Физическая культура", grade: 5 },
                { subject: "Химия", grade: 4 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`grade-card glass rounded-2xl p-4 flex items-center justify-between gap-3 transition-transform hover:-translate-y-1 ${
                    item.grade === 5 ? 'ring-2 ring-green-400/30' :
                    item.grade === 4 ? 'ring-2 ring-green-400/20' : ''
                  }`}
                >
                  <span className="text-sm text-text-secondary truncate">{item.subject}</span>
                  <span className={`grade-value text-xl font-display font-semibold flex-shrink-0 ${
                    item.grade === 5 ? 'text-green-500' :
                    item.grade === 4 ? 'text-green-400' :
                    'text-text-primary'
                  }`}>{item.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section id="sports" className="sports-section py-16 px-8">
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Активный образ жизни</p>
            <h2 className="section-title">Спорт и хобби</h2>
          </div>

          {/* Табы с эффектом жидкого стекла */}
          <div className="sports-tabs-container flex justify-center mb-12 reveal">
            <div className="sports-tabs-wrapper glass p-1.5 rounded-full flex gap-1">
              {["martial", "gym", "snowboard", "airsoft"].map((tab) => (
                <button
                  key={tab}
                  className={`sports-tab px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white shadow-lg"
                      : "text-text-muted hover:text-text-secondary hover:bg-white/50"
                  }`}
                  style={activeTab === tab ? { backgroundColor: '#6366f1', color: '#ffffff' } : {}}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "martial" && "Единоборства"}
                  {tab === "gym" && "Тренажёрный зал"}
                  {tab === "snowboard" && "Сноуборд"}
                  {tab === "airsoft" && "Страйкбол"}
                </button>
              ))}
            </div>
          </div>

          {/* Martial Arts Content */}
          {activeTab === "martial" && (
            <div className="sports-content">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center mb-10">
                <div className="sports-text">
                  <h3 className="text-3xl mb-4 font-display">Дзюдо и бокс</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Занимался дзюдо с 4 до 11 лет. Побеждал на соревнованиях, в основном первые места. Получил жёлтый пояс в 9 лет. Дзюдо дало мне дисциплину и понимание того, что победа достигается через труд.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    С 11 до 14 лет занимался боксом. Бросил, когда ушёл в тренажёрный зал на постоянной основе.
                  </p>
                  <div className="sports-stats flex gap-5 mt-6">
                    <div className="sport-stat glass text-center p-4 rounded-2xl">
                      <div className="sport-stat-value text-2xl text-accent">7</div>
                      <div className="sport-stat-label text-xs text-text-muted mt-1">лет дзюдо</div>
                    </div>
                    <div className="sport-stat glass text-center p-4 rounded-2xl">
                      <div className="sport-stat-value text-2xl text-accent">3</div>
                      <div className="sport-stat-label text-xs text-text-muted mt-1">года бокса</div>
                    </div>
                  </div>
                  
                  {/* Грамоты дзюдо - перемещены под статистику */}
                  <div className="certificates-section mt-8">
                    <h4 className="text-sm font-display mb-4 text-text-secondary">Грамоты и достижения</h4>
                    <div className="certificates-gallery grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div
                          key={num}
                          className="certificate-thumb relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group shadow-sm"
                          onClick={() => setSelectedImage(`${BASE}images/certificates/cert-${num}.jpg`)}
                        >
                          <img
                            src={`${BASE}images/certificates/cert-${num}.jpg`}
                            alt={`Грамота ${num}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="133" viewBox="0 0 100 133"><rect fill="%23fef3c7" width="100" height="133" rx="8"/><text x="50" y="60" text-anchor="middle" fill="%23d97706" font-size="10">Грамота</text><text x="50" y="75" text-anchor="middle" fill="%23d97706" font-size="10">' + num + '</text></svg>'
                            }}
                          />
                          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors duration-300 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="sports-gallery flex justify-center">
                  <img src={`${BASE}images/judo.jpg`} alt="Дзюдо" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" onClick={() => setSelectedImage(`${BASE}images/judo.jpg`)} />
                </div>
              </div>
            </div>
          )}

          {/* Gym Content */}
          {activeTab === "gym" && (
            <div className="sports-content grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
              <div className="sports-text">
                <h3 className="text-3xl mb-4 font-display">Тренажёрный зал</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Занимаюсь с 14 лет, активно — с 15. Регулярные тренировки стали частью режима.
                </p>
                <div className="sports-stats flex gap-5 mt-6">
                  <div className="sport-stat glass text-center p-4 rounded-2xl">
                    <div className="sport-stat-value text-2xl text-accent">1+</div>
                    <div className="sport-stat-label text-xs text-text-muted mt-1">год активно</div>
                  </div>
                </div>
              </div>
              <div className="sports-gallery flex justify-center">
                <img src={`${BASE}images/judo-2.jpg`} alt="Тренировка" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" />
              </div>
            </div>
          )}

          {/* Snowboard Content */}
          {activeTab === "snowboard" && (
            <div className="sports-content grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
              <div className="sports-text">
                <h3 className="text-3xl mb-4 font-display">Сноуборд</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  В первый раз я попробовал кататься в прошлом году. Это было больно и не приятно. Но каждый раз я испытывал чувство проигрыша и это заставляло меня каждый раз вставать и вставать пока снова не упаду. Мне помогал мой друг так что было весело учиться. И в первый день все было классно, мы хорошо проводили время в компании и я по немногу осваивал борд — но на следующий день все закончилось печально. Мы приехали на склон и с утра я почувствовал как научился управлять доской, она как будто слушалась меня и я начал рискованно ездить. Ну и как следовало ожидать...
                </p>
                <div className="sports-stats flex gap-5 mt-6">
                  <div className="sport-stat glass text-center p-4 rounded-2xl">
                    <div className="sport-stat-value text-2xl text-accent">1</div>
                    <div className="sport-stat-label text-xs text-text-muted mt-1">сезон</div>
                  </div>
                </div>
              </div>
              <div className="sports-gallery flex justify-center">
                <img src={`${BASE}images/snowboard-1.jpg`} alt="Сноуборд с друзьями" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" />
              </div>
            </div>
          )}

          {/* Airsoft Content */}
          {activeTab === "airsoft" && (
            <div className="sports-content grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
              <div className="sports-text">
                <h3 className="text-3xl mb-4 font-display">Страйкбол</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Играю 2 года. Команда из 6 друзей — сами создаём сценарии и игры. Играем на заброшках или в лесу.
                </p>
                <div className="sports-stats flex gap-5 mt-6">
                  <div className="sport-stat glass text-center p-4 rounded-2xl">
                    <div className="sport-stat-value text-2xl text-accent">2</div>
                    <div className="sport-stat-label text-xs text-text-muted mt-1">года</div>
                  </div>
                  <div className="sport-stat glass text-center p-4 rounded-2xl">
                    <div className="sport-stat-value text-2xl text-accent">6</div>
                    <div className="sport-stat-label text-xs text-text-muted mt-1">человек</div>
                  </div>
                </div>
              </div>
              <div className="sports-gallery max-w-xl">
                {/* Гармоничная компоновка: большое изображение в центре, два поменьше по бокам */}
                <div className="grid grid-cols-[1fr_1.3fr_1fr] gap-3 items-center">
                  {/* Левое изображение */}
                  <img
                    src={`${BASE}images/airsoft-1.jpg`}
                    alt="Страйкбол 1"
                    className="w-full aspect-[3/4] rounded-xl object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(`${BASE}images/airsoft-1.jpg`)}
                  />
                  
                  {/* Центральное изображение - акцент, больше */}
                  <img
                    src={`${BASE}images/airsoft-2.jpg`}
                    alt="Страйкбол 2"
                    className="w-full aspect-[2/3] rounded-2xl object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    onClick={() => setSelectedImage(`${BASE}images/airsoft-2.jpg`)}
                  />
                  
                  {/* Правое изображение */}
                  <img
                    src={`${BASE}images/airsoft-3.jpg`}
                    alt="Страйкбол 3"
                    className="w-full aspect-[3/4] rounded-xl object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage(`${BASE}images/airsoft-3.jpg`)}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section text-center py-24 px-8">
          <h2 className="contact-title mb-3 reveal">Мои контакты</h2>
          <p className="contact-subtitle text-text-secondary text-base mb-8 reveal"></p>
          <div className="contact-links flex justify-center gap-4 flex-wrap reveal">
            <a href="#" className="contact-link glass inline-flex items-center gap-2 px-5 py-3.5 text-text-primary text-sm font-medium transition-transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://t.me/rayzekss_makarov" className="contact-link glass inline-flex items-center gap-2 px-5 py-3.5 text-text-primary text-sm font-medium transition-transform hover:-translate-y-1" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>
            <a href="#" className="contact-link glass inline-flex items-center gap-2 px-5 py-3.5 text-text-primary text-sm font-medium transition-transform hover:-translate-y-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-text-muted text-xs">
          <p>© 2025 Роман Макаров</p>
        </footer>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Увеличенное изображение"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            src={selectedVideo}
            className="max-w-full max-h-[90vh] rounded-lg"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default App
