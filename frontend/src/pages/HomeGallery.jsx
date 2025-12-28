**✅ Copia TODO el código completo de Home.jsx** (líneas 1-244) que te mostré arriba y créalo en GitHub como `frontend/src/pages/Home.jsx`

---

### **Archivo 9: frontend/src/pages/HomeGallery.jsx** (ARCHIVO MUY GRANDE)

Este archivo es muy largo. Déjame mostrarlo por partes:
Action: file_editor view /app/frontend/src/pages/HomeGallery.jsx
Observation: /app/frontend/src/pages/HomeGallery.jsx:
1|import React, { useState } from 'react';
2|import { Card, CardContent } from '../components/ui/card';
3|import { Button } from '../components/ui/button';
4|import { Badge } from '../components/ui/badge';
5|import { Input } from '../components/ui/input';
6|import { Textarea } from '../components/ui/textarea';
7|import { Star, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
8|import { mockGallery, mockTestimonials } from '../mock';
9|import { toast } from 'sonner';
10|import axios from 'axios';
11|
12|const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
13|const API = `${BACKEND_URL}/api`;
14|
15|const HomeGallery = () => {
16|  const [selectedCategory, setSelectedCategory] = useState('todos');
17|  const [formData, setFormData] = useState({
18|    name: '',
19|    email: '',
20|    phone: '',
21|    eventType: '',
22|    date: '',
23|    message: ''
24|  });
25|  const [isSubmitting, setIsSubmitting] = useState(false);
26|
27|  const categories = [
28|    { id: 'todos', label: 'Todos' },
29|    { id: 'bodas', label: 'Bodas' },
30|    { id: 'xv-años', label: 'XV Años' },
31|    { id: 'corporativo', label: 'Corporativo' },
32|    { id: 'general', label: 'General' }
33|  ];
34|
35|  const filteredGallery = selectedCategory === 'todos' 
36|    ? mockGallery 
37|    : mockGallery.filter(item => item.category === selectedCategory);
38|
39|  const handleSubmit = async (e) => {
40|    e.preventDefault();
41|    setIsSubmitting(true);
42|
43|    try {
44|      const response = await axios.post(`${API}/contact-messages/`, formData);
45|      
46|      if (response.status === 201) {
47|        toast.success('¡Mensaje enviado exitosamente!', {
48|          description: 'Te contactaremos pronto para cotizar tu evento.',
49|          duration: 5000,
50|        });
51|        
52|        // Reset form
53|        setFormData({
54|          name: '',
55|          email: '',
56|          phone: '',
57|          eventType: '',
58|          date: '',
59|          message: ''
60|        });
61|      }
62|    } catch (error) {
63|      console.error('Error sending message:', error);
64|      toast.error('Error al enviar el mensaje', {
65|        description: 'Por favor, intenta nuevamente o contáctanos directamente por teléfono.',
66|        duration: 5000,
67|      });
68|    } finally {
69|      setIsSubmitting(false);
70|    }
71|  };
72|
73|  const handleChange = (e) => {
74|    setFormData({
75|      ...formData,
76|      [e.target.name]: e.target.value
77|    });
78|  };
79|
80|  return (
81|    <>
82|      {/* Gallery Section */}
83|      <section id="galeria" className="py-20 px-4 bg-white">
84|        <div className="container mx-auto">
85|          <div className="text-center mb-12">
86|            <h2 className="text-4xl md:text-5xl font-bold mb-6">Galería de Eventos</h2>
87|            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
88|              Mira algunos de los increíbles eventos que hemos tenido el honor de amenizar
89|            </p>
90|
91|            {/* Category Filter */}
92|            <div className="flex flex-wrap justify-center gap-3">
93|              {categories.map((category) => (
94|                <Button
95|                  key={category.id}
96|                  onClick={() => setSelectedCategory(category.id)}
97|                  variant={selectedCategory === category.id ? "default" : "outline"}
98|                  className={selectedCategory === category.id 
99|                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white" 
  ¡Perfecto! Te doy la continuación de **HomeGallery.jsx** desde la línea 109:

---

## **HomeGallery.jsx - PARTE 2 (desde línea 109)**
Action: file_editor view /app/frontend/src/pages/HomeGallery.jsx
Observation: /app/frontend/src/pages/HomeGallery.jsx:
109|          {/* Gallery Grid */}
110|          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
111|            {filteredGallery.map((item) => (
112|              <div 
113|                key={item.id} 
114|                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
115|              >
116|                <img 
117|                  src={item.image} 
118|                  alt={item.title}
119|                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
120|                />
121|                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
122|                  <div className="p-6 w-full">
123|                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
124|                    <Badge className="mt-2 bg-orange-500 text-white">
125|                      {categories.find(c => c.id === item.category)?.label || 'General'}
126|                    </Badge>
127|                  </div>
128|                </div>
129|              </div>
130|            ))}
131|          </div>
132|        </div>
133|      </section>
134|
135|      {/* Testimonials Section */}
136|      <section id="testimonios" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
137|        <div className="container mx-auto">
138|          <div className="text-center mb-16">
139|            <h2 className="text-4xl md:text-5xl font-bold mb-6">Lo Que Dicen Nuestros Clientes</h2>
140|            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
141|              La satisfacción de nuestros clientes es nuestra mayor recompensa
142|            </p>
143|          </div>
144|
145|          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
146|            {mockTestimonials.map((testimonial) => (
147|              <Card key={testimonial.id} className="hover:shadow-2xl transition-all border-2 hover:border-orange-300">
148|                <CardContent className="pt-6">
149|                  <div className="flex gap-1 mb-4">
150|                    {[...Array(testimonial.rating)].map((_, i) => (
151|                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
152|                    ))}
153|                  </div>
154|                  <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.comment}"</p>
155|                  <div className="flex items-center justify-between pt-4 border-t">
156|                    <div>
157|                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
158|                      <p className="text-sm text-slate-600">{testimonial.event}</p>
159|                    </div>
160|                    <p className="text-sm text-slate-500">{testimonial.date}</p>
161|                  </div>
162|                </CardContent>
163|              </Card>
164|            ))}
165|          </div>
166|        </div>
167|      </section>
168|
169|      {/* Contact Section */}
170|      <section id="contacto" className="py-20 px-4 bg-white">
171|        <div className="container mx-auto">
172|          <div className="max-w-5xl mx-auto">
173|            <div className="text-center mb-16">
174|              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h2>
175|              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
176|                ¿Listo para hacer de tu evento algo inolvidable? Escríbenos y cotiza sin compromiso
177|              </p>
178|            </div>
179|
180|            <div className="grid md:grid-cols-2 gap-12">
181|              {/* Contact Form */}
182|              <div>
183|                <Card className="border-2">
184|                  <CardContent className="pt-6">
185|                    <form onSubmit={handleSubmit} className="space-y-4">
186|                      <div>
187|                        <label className="block text-sm font-medium mb-2 text-slate-700">Nombre Completo</label>
188|                        <Input 
189|                          type="text" 
190|                          name="name"
191|                          value={formData.name}
192|                          onChange={handleChange}
193|                          placeholder="Tu nombre" 
194|                          required 
195|                          className="border-slate-300"
196|                        />
197|                      </div>
198|                      <div>
199|                        <label className="block text-sm font-medium mb-2 text-slate-700">Email</label>
200|                        <Input 
201|                          type="email" 
202|                          name="email"
203|                          value={formData.email}
204|                          onChange={handleChange}
205|                          placeholder="tu@email.com" 
206|                          required 
207|                          className="border-slate-300"
208|                        />
209|                      </div>
210|                      <div>
211|                        <label className="block text-sm font-medium mb-2 text-slate-700">Teléfono</label>
212|                        <Input 
213|                          type="tel" 
214|                          name="phone"
215|                          value={formData.phone}
216|                          onChange={handleChange}
217|                          placeholder="Tu teléfono" 
218|                          required 
219|                          className="border-slate-300"
220|                        />
  **Copia esto ☝️ (líneas 109-220)** 

---

## **HomeGallery.jsx - PARTE 3 (desde línea 221)**
Action: file_editor view /app/frontend/src/pages/HomeGallery.jsx
Observation: /app/frontend/src/pages/HomeGallery.jsx:
221|                      </div>
222|                      <div>
223|                        <label className="block text-sm font-medium mb-2 text-slate-700">Tipo de Evento</label>
224|                        <Input 
225|                          type="text" 
226|                          name="eventType"
227|                          value={formData.eventType}
228|                          onChange={handleChange}
229|                          placeholder="Boda, XV Años, etc." 
230|                          required 
231|                          className="border-slate-300"
232|                        />
233|                      </div>
234|                      <div>
235|                        <label className="block text-sm font-medium mb-2 text-slate-700">Fecha del Evento</label>
236|                        <Input 
237|                          type="date" 
238|                          name="date"
239|                          value={formData.date}
240|                          onChange={handleChange}
241|                          required 
242|                          className="border-slate-300"
243|                        />
244|                      </div>
245|                      <div>
246|                        <label className="block text-sm font-medium mb-2 text-slate-700">Mensaje</label>
247|                        <Textarea 
248|                          name="message"
249|                          value={formData.message}
250|                          onChange={handleChange}
251|                          placeholder="Cuéntanos sobre tu evento..." 
252|                          rows={4}
253|                          className="border-slate-300"
254|                        />
255|                      </div>
256|                      <Button 
257|                        type="submit" 
258|                        disabled={isSubmitting}
259|                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-6 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
260|                      >
261|                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
262|                      </Button>
263|                    </form>
264|                  </CardContent>
265|                </Card>
266|              </div>
267|
268|              {/* Contact Info */}
269|              <div className="space-y-8">
270|                <Card className="border-2 hover:border-orange-300 hover:shadow-lg transition-all">
271|                  <CardContent className="pt-6">
272|                    <div className="flex items-start gap-4">
273|                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
274|                        <Phone className="w-6 h-6 text-orange-600" />
275|                      </div>
276|                      <div>
277|                        <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
278|                        <a href="tel:+593997636182" className="text-slate-600 hover:text-orange-600 transition-colors block">+593 99 763 6182</a>
279|                        <a href="tel:+593998768092" className="text-slate-600 hover:text-orange-600 transition-colors block">+593 99 876 8092</a>
280|                      </div>
281|                    </div>
282|                  </CardContent>
283|                </Card>
284|
285|                <Card className="border-2 hover:border-orange-300 hover:shadow-lg transition-all">
286|                  <CardContent className="pt-6">
287|                    <div className="flex items-start gap-4">
288|                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
289|                        <Mail className="w-6 h-6 text-red-600" />
290|                      </div>
291|                      <div>
292|                        <h3 className="font-semibold text-lg mb-2">Email</h3>
293|                        <a href="mailto:pomapablo20@gmail.com" className="text-slate-600 hover:text-orange-600 transition-colors block">pomapablo20@gmail.com</a>
294|                      </div>
295|                    </div>
296|                  </CardContent>
297|                </Card>
298|
299|                <Card className="border-2 hover:border-orange-300 hover:shadow-lg transition-all">
300|                  <CardContent className="pt-6">
301|                    <div className="flex items-start gap-4">
302|                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
303|                        <MapPin className="w-6 h-6 text-yellow-600" />
304|                      </div>
305|                      <div>
306|                        <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
307|                        <p className="text-slate-600">Loja, Ecuador</p>
308|                        <p className="text-slate-600">Cobertura nacional</p>
309|                      </div>
310|                    </div>
311|                  </CardContent>
312|                </Card>
313|
314|                <Card className="border-2 bg-gradient-to-br from-orange-50 to-red-50">
315|                  <CardContent className="pt-6">
316|                    <h3 className="font-semibold text-lg mb-4">Síguenos en Redes Sociales</h3>
317|                    <div className="flex gap-4">
318|                      <a 
319|                        href="https://www.facebook.com/luis.cuenca.325564" 
320|                        target="_blank" 
321|                        rel="noopener noreferrer"
322|                        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-blue-100 transition-colors shadow-md"
323|                      >
324|                        <Facebook className="w-6 h-6 text-blue-600" />
325|                      </a>
326|                      <a 
327|                        href="https://wa.me/593997636182" 
328|                        target="_blank" 
329|                        rel="noopener noreferrer"
330|                        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors shadow-md"
331|                      >
332|                        <MessageCircle className="w-6 h-6 text-green-600" />
333|                      </a>
334|                    </div>
335|                  </CardContent>
336|                </Card>
337|              </div>
338|            </div>
339|          </div>
340|        </div>
341|      </section>
342|
343|      {/* Footer */}
344|      <footer className="bg-slate-900 text-white py-12 px-4">
345|        <div className="container mx-auto">
346|          <div className="grid md:grid-cols-3 gap-8 mb-8">
347|            <div>
348|              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
349|                SUR MUSICAL
350|              </h3>
  **Copia esto ☝️ (líneas 221-350)**

---

## **HomeGallery.jsx - PARTE 4 FINAL (desde línea 351 hasta el final)**
Action: file_editor view /app/frontend/src/pages/HomeGallery.jsx
Observation: /app/frontend/src/pages/HomeGallery.jsx:
351|              <p className="text-slate-400 leading-relaxed">
352|                Transformando eventos en experiencias memorables con la mejor música y entretenimiento profesional.
353|              </p>
354|            </div>
355|            <div>
356|              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
357|              <ul className="space-y-2">
358|                <li><a href="#inicio" className="text-slate-400 hover:text-orange-400 transition-colors">Inicio</a></li>
359|                <li><a href="#nosotros" className="text-slate-400 hover:text-orange-400 transition-colors">Nosotros</a></li>
360|                <li><a href="#servicios" className="text-slate-400 hover:text-orange-400 transition-colors">Servicios</a></li>
361|                <li><a href="#galeria" className="text-slate-400 hover:text-orange-400 transition-colors">Galería</a></li>
362|              </ul>
363|            </div>
364|            <div>
365|              <h4 className="font-semibold text-lg mb-4">Horarios</h4>
366|              <p className="text-slate-400 mb-2">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
367|              <p className="text-slate-400 mb-2">Sábados: 10:00 AM - 4:00 PM</p>
368|              <p className="text-slate-400">Domingos: Cerrado</p>
369|            </div>
370|          </div>
371|          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
372|            <p>&copy; 2025 SUR MUSICAL. Todos los derechos reservados.</p>
373|          </div>
374|        </div>
375|      </footer>
376|    </>
377|  );
378|};
379|
380|export default HomeGallery;
100|                    : "border-orange-300 text-orange-700 hover:bg-orange-50"
