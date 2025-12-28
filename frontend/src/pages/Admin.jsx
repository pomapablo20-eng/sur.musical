
## **🎯 ARCHIVO FINAL: frontend/src/pages/Admin.jsx**
Action: file_editor view /app/frontend/src/pages/Admin.jsx
Observation: /app/frontend/src/pages/Admin.jsx:
1|import React, { useState, useEffect } from 'react';
2|import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
3|import { Button } from '../components/ui/button';
4|import { Badge } from '../components/ui/badge';
5|import { Mail, Phone, Calendar, MessageSquare, RefreshCw, Disc3 } from 'lucide-react';
6|import { toast } from 'sonner';
7|import axios from 'axios';
8|
9|const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
10|const API = `${BACKEND_URL}/api`;
11|
12|const Admin = () => {
13|  const [messages, setMessages] = useState([]);
14|  const [isLoading, setIsLoading] = useState(true);
15|  const [selectedMessage, setSelectedMessage] = useState(null);
16|
17|  const fetchMessages = async () => {
18|    setIsLoading(true);
19|    try {
20|      const response = await axios.get(`${API}/contact-messages/`);
21|      setMessages(response.data);
22|    } catch (error) {
23|      console.error('Error fetching messages:', error);
24|      toast.error('Error al cargar los mensajes');
25|    } finally {
26|      setIsLoading(false);
27|    }
28|  };
29|
30|  useEffect(() => {
31|    fetchMessages();
32|  }, []);
33|
34|  const updateStatus = async (messageId, newStatus) => {
35|    try {
36|      await axios.patch(`${API}/contact-messages/${messageId}`, {
37|        status: newStatus
38|      });
39|      toast.success('Estado actualizado');
40|      fetchMessages();
41|    } catch (error) {
42|      console.error('Error updating status:', error);
43|      toast.error('Error al actualizar el estado');
44|    }
45|  };
46|
47|  const getStatusColor = (status) => {
48|    switch (status) {
49|      case 'new':
50|        return 'bg-blue-100 text-blue-700';
51|      case 'contacted':
52|        return 'bg-yellow-100 text-yellow-700';
53|      case 'closed':
54|        return 'bg-green-100 text-green-700';
55|      default:
56|        return 'bg-gray-100 text-gray-700';
57|    }
58|  };
59|
60|  const getStatusLabel = (status) => {
61|    switch (status) {
62|      case 'new':
63|        return 'Nuevo';
64|      case 'contacted':
65|        return 'Contactado';
66|      case 'closed':
67|        return 'Cerrado';
68|      default:
69|        return status;
70|    }
71|  };
72|
73|  const formatDate = (dateString) => {
74|    return new Date(dateString).toLocaleDateString('es-EC', {
75|      year: 'numeric',
76|      month: 'long',
77|      day: 'numeric',
78|      hour: '2-digit',
79|      minute: '2-digit'
80|    });
81|  };
82|
83|  return (
84|    <div className="min-h-screen bg-slate-50">
85|      {/* Header */}
86|      <header className="bg-white shadow-sm border-b">
87|        <div className="container mx-auto px-4 py-6">
88|          <div className="flex items-center justify-between">
89|            <div className="flex items-center gap-3">
90|              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
91|                <Disc3 className="w-7 h-7 text-white animate-spin-slow" />
92|              </div>
93|              <div>
94|                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
95|                  Panel de Administración
96|                </h1>
97|                <p className="text-sm text-slate-600">SUR MUSICAL</p>
98|              </div>
99|            </div>
100|            <Button onClick={fetchMessages} variant="outline" className="gap-2">
101|              <RefreshCw className="w-4 h-4" />
102|              Actualizar
103|            </Button>
104|          </div>
105|        </div>
106|      </header>
107|
108|      {/* Main Content */}
109|      <div className="container mx-auto px-4 py-8">
110|        {/* Stats */}
111|        <div className="grid md:grid-cols-3 gap-6 mb-8">
112|          <Card>
113|            <CardHeader>
114|              <CardTitle className="text-lg">Mensajes Nuevos</CardTitle>
115|            </CardHeader>
116|            <CardContent>
117|              <p className="text-3xl font-bold text-blue-600">
118|                {messages.filter(m => m.status === 'new').length}
119|              </p>
120|            </CardContent>
121|          </Card>
122|          <Card>
123|            <CardHeader>
124|              <CardTitle className="text-lg">Contactados</CardTitle>
125|            </CardHeader>
126|            <CardContent>
127|              <p className="text-3xl font-bold text-yellow-600">
128|                {messages.filter(m => m.status === 'contacted').length}
129|              </p>
130|            </CardContent>
131|          </Card>
132|          <Card>
133|            <CardHeader>
134|              <CardTitle className="text-lg">Total Mensajes</CardTitle>
135|            </CardHeader>
136|            <CardContent>
137|              <p className="text-3xl font-bold text-slate-700">
138|                {messages.length}
139|              </p>
140|            </CardContent>
141|          </Card>
142|        </div>
143|
144|        {/* Messages List */}
145|        <Card>
146|          <CardHeader>
147|            <CardTitle>Mensajes de Contacto</CardTitle>
148|          </CardHeader>
149|          <CardContent>
  **Admin.jsx - PARTE 2 (continuación):**
Action: file_editor view /app/frontend/src/pages/Admin.jsx
Observation: /app/frontend/src/pages/Admin.jsx:
150|            {isLoading ? (
151|              <div className="text-center py-12">
152|                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-slate-400 mb-4" />
153|                <p className="text-slate-600">Cargando mensajes...</p>
154|              </div>
155|            ) : messages.length === 0 ? (
156|              <div className="text-center py-12">
157|                <MessageSquare className="w-12 h-12 mx-auto text-slate-300 mb-4" />
158|                <p className="text-slate-600">No hay mensajes aún</p>
159|              </div>
160|            ) : (
161|              <div className="space-y-4">
162|                {messages.map((message) => (
163|                  <Card key={message.id} className="border-2 hover:border-orange-300 transition-all">
164|                    <CardContent className="pt-6">
165|                      <div className="flex items-start justify-between mb-4">
166|                        <div>
167|                          <h3 className="font-semibold text-lg mb-1">{message.name}</h3>
168|                          <p className="text-sm text-slate-500">
169|                            {formatDate(message.createdAt)}
170|                          </p>
171|                        </div>
172|                        <Badge className={getStatusColor(message.status)}>
173|                          {getStatusLabel(message.status)}
174|                        </Badge>
175|                      </div>
176|
177|                      <div className="grid md:grid-cols-2 gap-4 mb-4">
178|                        <div className="flex items-center gap-2 text-slate-700">
179|                          <Mail className="w-4 h-4 text-orange-600" />
180|                          <a href={`mailto:${message.email}`} className="hover:text-orange-600">
181|                            {message.email}
182|                          </a>
183|                        </div>
184|                        <div className="flex items-center gap-2 text-slate-700">
185|                          <Phone className="w-4 h-4 text-orange-600" />
186|                          <a href={`tel:${message.phone}`} className="hover:text-orange-600">
187|                            {message.phone}
188|                          </a>
189|                        </div>
190|                        <div className="flex items-center gap-2 text-slate-700">
191|                          <MessageSquare className="w-4 h-4 text-orange-600" />
192|                          <span>{message.eventType}</span>
193|                        </div>
194|                        <div className="flex items-center gap-2 text-slate-700">
195|                          <Calendar className="w-4 h-4 text-orange-600" />
196|                          <span>{new Date(message.date).toLocaleDateString('es-EC')}</span>
197|                        </div>
198|                      </div>
199|
200|                      {message.message && (
201|                        <div className="mb-4 p-4 bg-slate-50 rounded-lg">
202|                          <p className="text-sm text-slate-700 italic">"{message.message}"</p>
203|                        </div>
204|                      )}
205|
206|                      <div className="flex gap-2">
207|                        {message.status !== 'contacted' && (
208|                          <Button
209|                            size="sm"
210|                            variant="outline"
211|                            onClick={() => updateStatus(message.id, 'contacted')}
212|                            className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
213|                          >
214|                            Marcar como Contactado
215|                          </Button>
216|                        )}
217|                        {message.status !== 'closed' && (
218|                          <Button
219|                            size="sm"
220|                            variant="outline"
221|                            onClick={() => updateStatus(message.id, 'closed')}
222|                            className="border-green-300 text-green-700 hover:bg-green-50"
223|                          >
224|                            Cerrar
225|                          </Button>
226|                        )}
227|                        {message.status !== 'new' && (
228|                          <Button
229|                            size="sm"
230|                            variant="outline"
231|                            onClick={() => updateStatus(message.id, 'new')}
232|                            className="border-blue-300 text-blue-700 hover:bg-blue-50"
233|                          >
234|                            Marcar como Nuevo
235|                          </Button>
236|                        )}
237|                      </div>
238|                    </CardContent>
239|                  </Card>
240|                ))}
241|              </div>
242|            )}
243|          </CardContent>
244|        </Card>
245|      </div>
246|    </div>
247|  );
248|};
249|
250|export default Admin;
251|
150|            {isLoading ? (
