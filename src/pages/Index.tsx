import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Home" className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-bold text-secondary">МебельМастер</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#hero" className="text-secondary hover:text-primary font-medium">Главная</a>
                <a href="#catalog" className="text-secondary hover:text-primary font-medium">Каталог</a>
                <a href="#services" className="text-secondary hover:text-primary font-medium">Услуги</a>
                <a href="#about" className="text-secondary hover:text-primary font-medium">О нас</a>
                <a href="#reviews" className="text-secondary hover:text-primary font-medium">Отзывы</a>
                <a href="#contact" className="text-secondary hover:text-primary font-medium">Контакты</a>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-accent via-white to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                Корпусная мебель<br />
                <span className="text-primary">на заказ</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Изготавливаем кухни, шкафы, гардеробные по индивидуальным размерам. 
                Качественные материалы, современный дизайн, доступные цены.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-2">
                  <Icon name="Gift" className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg font-semibold text-secondary">БЕСПЛАТНО</span>
                </div>
                <p className="text-secondary font-medium">
                  Выезд дизайнера для замеров помещения
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Заказать замер
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/img/ee3f2a8f-a8c7-4bbd-b737-2e70b3a19d72.jpg" 
                  alt="Современная кухня" 
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <span className="text-secondary font-semibold">Кухня "Модерн"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Каталог мебели</h2>
            <p className="text-xl text-gray-600">Популярные категории корпусной мебели</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Кухни",
                description: "Современные кухонные гарнитуры любой сложности",
                image: "/img/ee3f2a8f-a8c7-4bbd-b737-2e70b3a19d72.jpg",
                price: "от 45 000 ₽",
                icon: "ChefHat"
              },
              {
                title: "Шкафы-купе",
                description: "Встроенные и корпусные шкафы с раздвижными дверями",
                image: "/img/185376ac-075e-47b7-a19b-7138a0e1c6b8.jpg",
                price: "от 25 000 ₽",
                icon: "Shirt"
              },
              {
                title: "Столы и стулья",
                description: "Обеденные группы и рабочие столы",
                image: "/img/641ff82e-2909-4fcf-94d9-998df7c651fd.jpg",
                price: "от 15 000 ₽",
                icon: "Table"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center text-secondary">
                    <Icon name={item.icon} className="h-6 w-6 text-primary mr-3" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Заказать расчет
                    <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный цикл производства от идеи до установки</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Бесплатный замер",
                description: "Выезд дизайнера с образцами материалов",
                icon: "Ruler"
              },
              {
                title: "3D визуализация",
                description: "Создание реалистичного проекта мебели",
                icon: "Box"
              },
              {
                title: "Изготовление",
                description: "Производство на современном оборудовании",
                icon: "Settings"
              },
              {
                title: "Установка",
                description: "Профессиональная сборка и монтаж",
                icon: "Wrench"
              }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon name={service.icon} className="h-10 w-10 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашей компании</h2>
              <p className="text-lg mb-6 opacity-90">
                Более 10 лет мы создаем качественную корпусную мебель для дома и офиса. 
                Наша команда - это опытные дизайнеры, мастера-краснодеревщики и монтажники.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="opacity-90">Выполненных проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10 лет</div>
                  <div className="opacity-90">Опыта работы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2 года</div>
                  <div className="opacity-90">Гарантия на изделия</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="opacity-90">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Icon name="Award" className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-sm opacity-90">Используем только проверенные материалы</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Icon name="Clock" className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Сроки</h3>
                  <p className="text-sm opacity-90">Соблюдаем договорные сроки изготовления</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Icon name="Shield" className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Гарантия</h3>
                  <p className="text-sm opacity-90">2 года гарантии на всю продукцию</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Icon name="Truck" className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Доставка</h3>
                  <p className="text-sm opacity-90">Бесплатная доставка по городу</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши заказчики</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                text: "Отличная работа! Кухня получилась именно такой, как мы мечтали. Качество на высоте, сроки соблюдены.",
                rating: 5,
                project: "Кухня в квартире"
              },
              {
                name: "Сергей Иванов", 
                text: "Заказывали шкаф-купе в спальню. Очень довольны результатом. Мастера профессионалы своего дела.",
                rating: 5,
                project: "Шкаф-купе"
              },
              {
                name: "Елена Сидорова",
                text: "Быстро, качественно, по разумной цене. Дизайнер предложил отличные решения для нашей прихожей.",
                rating: 5,
                project: "Прихожая"
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-secondary">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Заказать бесплатный замер</h2>
            <p className="text-xl text-white/90">Оставьте заявку, и наш дизайнер приедет к вам с образцами материалов</p>
          </div>
          
          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Тип мебели</label>
                  <Input placeholder="Кухня, шкаф-купе, прихожая..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Комментарий к заказу</label>
                  <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Записаться на замер
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl opacity-90">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (999) 123-45-67</p>
              <p className="opacity-90">+7 (999) 123-45-68</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@mebelmaster.ru</p>
              <p className="opacity-90">order@mebelmaster.ru</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">г. Москва</p>
              <p className="opacity-90">ул. Мебельная, 123</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="flex justify-center space-x-8">
              <div>
                <span className="text-primary font-semibold">Пн-Пт:</span>
                <span className="ml-2 opacity-90">9:00 - 18:00</span>
              </div>
              <div>
                <span className="text-primary font-semibold">Сб:</span>
                <span className="ml-2 opacity-90">10:00 - 16:00</span>
              </div>
              <div>
                <span className="text-primary font-semibold">Вс:</span>
                <span className="ml-2 opacity-90">выходной</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Home" className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold">МебельМастер</span>
              </div>
              <p className="text-gray-400">
                Изготовление корпусной мебели на заказ. Качество, надежность, индивидуальный подход.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary">Кухни на заказ</a></li>
                <li><a href="#" className="hover:text-primary">Шкафы-купе</a></li>
                <li><a href="#" className="hover:text-primary">Гардеробные</a></li>
                <li><a href="#" className="hover:text-primary">Прихожие</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-primary">О нас</a></li>
                <li><a href="#reviews" className="hover:text-primary">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary">Гарантия</a></li>
                <li><a href="#" className="hover:text-primary">Портфолио</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@mebelmaster.ru</li>
                <li>г. Москва, ул. Мебельная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МебельМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}