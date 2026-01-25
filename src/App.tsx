import { WebGLShader } from "./components/ui/web-gl-shader"
import { useState, useEffect } from "react"
import "./index.css"

function App() {
  const [activeTab, setActiveTab] = useState("martial")

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
              <img src="/images/hero.jpg" alt="Роман Макаров" className="hero-photo w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl" />
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
                    <img src="/images/mining-wallet.png" alt="Крипто-кошелёк" className="w-36 h-24 object-cover rounded-xl flex-shrink-0 transition-transform hover:scale-105 cursor-pointer" />
                    <img src="/images/mining-childhood.jpg" alt="Детство" className="w-36 h-24 object-cover rounded-xl flex-shrink-0 transition-transform hover:scale-105 cursor-pointer" />
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
                    <img src="/images/carwash.jpg" alt="Автомойка" className="w-36 h-24 object-cover rounded-xl flex-shrink-0 transition-transform hover:scale-105 cursor-pointer" />
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
                  Я всегда интересовался новыми технологиями. Когда услышал о прорыве языковых моделей, начал углубляться всё дальше...
                </p>
                <div className="story-full max-h-0 overflow-hidden transition-all duration-500 opacity-0" id="story-3">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Я всегда интересовался новыми технологиями. Когда услышал новости о том, что языковые модели значительно выросли в производительности за короткое время, сразу стало интересно. Начал углубляться всё дальше и дальше.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Стал много общаться с ИИ по вопросам, которые требовали огромного времени для ресёрча интернета. А когда нейросети научились нормально программировать — начал создавать свои проекты. Сейчас постоянно использую ИИ в разработке своих IT-проектов.
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
                Мы оба увлекаемся съёмками и катанием на квадроциклах. Всегда хотели делать и то, и другое — чтобы нас знали люди. 8 января 2025 года основали канал.
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                За несколько месяцев собрали команду из 9 человек: операторы и ребята, с которыми катаемся. Они снимают контент, а мы с другом монтируем. Снимаем на GoPro, дрон и телефоны.
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
              <img src="/images/channel-team.jpg" alt="Команда" className="w-full h-auto rounded-2xl transition-transform hover:scale-105 cursor-pointer" style={{ objectFit: 'contain' }} />
              <img src="/images/channel-1.jpg" alt="Поездка" className="w-full h-auto rounded-2xl transition-transform hover:scale-105 cursor-pointer" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* Dev Section */}
        <section id="dev" className="dev-section py-16 px-8">
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Разработка</p>
            <h2 className="section-title">IT-проекты</h2>
          </div>
          <div className="dev-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
            </div>
            <div className="dev-card glass rounded-3xl p-8 relative overflow-hidden transition-transform hover:-translate-y-1 reveal">
              <div className="dev-card-icon text-5xl mb-4">💼</div>
              <h3 className="text-xl mb-3 font-display">SoloStyle</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Приложение для западного рынка труда — аналог HH.ru. Люди находят исполнителей услуг за деньги, предприниматели находят клиентов.
              </p>
              <div className="dev-tags flex flex-wrap gap-2 mt-4">
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Стартап</span>
                <span className="dev-tag text-xs px-3 py-1.5 bg-accent-soft text-accent rounded-full font-medium">Маркетплейс</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="achievements-section bg-[#f5f5f0] rounded-[32px] p-12 md:p-16 my-12 mx-auto max-w-6xl">
          <div className="section-header text-center mb-12 reveal">
            <p className="section-label text-accent text-xs font-semibold tracking-widest uppercase mb-2">Олимпиады</p>
            <h2 className="section-title">Достижения</h2>
          </div>
          <div className="achievements-grid grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { badge: "Призёр", badgeClass: "badge-gold", title: "Обществознание", desc: "Муниципальный этап ВСОШ" },
              { badge: "Призёр", badgeClass: "badge-gold", title: "История", desc: "Муниципальный этап ВСОШ" },
              { badge: "Призёр", badgeClass: "badge-gold", title: "Экономика", desc: "Муниципальный этап ВСОШ" },
              { badge: "Призёр", badgeClass: "badge-silver", title: "Информатика", desc: "Школьный этап ВСОШ" },
              { badge: "Призёр", badgeClass: "badge-silver", title: "Химия", desc: "Школьный этап ВСОШ" },
              { badge: "Участник", badgeClass: "badge-silver", title: "Региональный этап", desc: "История, Общество, Экономика" },
            ].map((item, idx) => (
              <div key={idx} className="achievement-card bg-white rounded-2xl p-6 border border-black/4 transition-transform hover:-translate-y-1 reveal">
                <span className={`achievement-badge ${item.badgeClass} inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-3`}>{item.badge}</span>
                <div className="achievement-title font-semibold text-sm mb-1">{item.title}</div>
                <div className="achievement-desc text-xs text-text-muted">{item.desc}</div>
              </div>
            ))}
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
                { subject: "Алгебра", grade: 3 },
                { subject: "Английский язык", grade: 4 },
                { subject: "Биология", grade: 5 },
                { subject: "Вероятность и статистика", grade: 4 },
                { subject: "География", grade: 4 },
                { subject: "Геометрия", grade: 3 },
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

          <div className="sports-tabs flex justify-center gap-3 mb-12 flex-wrap reveal">
            {["martial", "gym", "snowboard", "airsoft"].map((tab) => (
              <button
                key={tab}
                className={`sports-tab px-5 py-3 border-none bg-transparent text-sm font-medium rounded-full transition-all ${
                  activeTab === tab ? "bg-text-primary text-white" : "text-text-muted"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "martial" && "Единоборства"}
                {tab === "gym" && "Тренажёрный зал"}
                {tab === "snowboard" && "Сноуборд"}
                {tab === "airsoft" && "Страйкбол"}
              </button>
            ))}
          </div>

          {/* Martial Arts Content */}
          {activeTab === "martial" && (
            <div className="sports-content grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
              <div className="sports-text">
                <h3 className="text-3xl mb-4 font-display">Дзюдо и бокс</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Занимался дзюдо с 4 до 11 лет. Побеждал на соревнованиях, в основном первые места. Получил жёлтый пояс в 9 лет.
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
              </div>
              <div className="sports-gallery flex justify-center">
                <img src="/images/judo.jpg" alt="Дзюдо" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" />
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
                <img src="/images/judo-2.jpg" alt="Тренировка" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" />
              </div>
            </div>
          )}

          {/* Snowboard Content */}
          {activeTab === "snowboard" && (
            <div className="sports-content grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
              <div className="sports-text">
                <h3 className="text-3xl mb-4 font-display">Сноуборд</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Один сезон за плечами. Сейчас из-за учёбы не могу выехать покататься, но планирую продолжить.
                </p>
                <div className="sports-stats flex gap-5 mt-6">
                  <div className="sport-stat glass text-center p-4 rounded-2xl">
                    <div className="sport-stat-value text-2xl text-accent">1</div>
                    <div className="sport-stat-label text-xs text-text-muted mt-1">сезон</div>
                  </div>
                </div>
              </div>
              <div className="sports-gallery flex justify-center">
                <img src="/images/snowboard-1.jpg" alt="Сноуборд с друзьями" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" />
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
              <div className="sports-gallery flex justify-center">
                <img src="/images/airsoft-portrait.jpg" alt="Страйкбол" className="w-full max-w-md rounded-2xl object-cover transition-transform hover:scale-105 cursor-pointer" />
              </div>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section text-center py-24 px-8">
          <h2 className="contact-title mb-3 reveal">Давайте общаться</h2>
          <p className="contact-subtitle text-text-secondary text-base mb-8 reveal">Открыт для новых проектов и знакомств</p>
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
    </div>
  )
}

export default App
