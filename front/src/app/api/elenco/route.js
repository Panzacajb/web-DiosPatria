import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const elenco = [
      {
        nombre: "Seba",
        descripcion: "Soy Sebastián Arce, nací en Córdoba Capital e inicié mi camino artístico a los 13 años en talleres de actuación y teatro musical, complementando mi formación con danza contemporánea y urbanas. A los 19 años me trasladé a Buenos Aires, donde profundicé mi entrenamiento en teatro musical, actuación, canto, theater jazz e iluminación, ampliando mi mirada sobre la escena y sus oficios. A los 24 decidí regresar a Córdoba e ingresar a la Licenciatura en Teatro de la Universidad Nacional de Córdoba, carrera que transito actualmente en mi tercer año. Mi búsqueda se orienta a la construcción de un lenguaje sensible, crítico y riguroso, en el que la dirección se convierte en un espacio colectivo de investigación sobre el cuerpo, la imagen y la potencia poética de lo teatral.",
        imagen: "/actores/director.jpg"
      },
      {
        nombre: "Fachu",
        descripcion: "Ella es Maria del Carmen Arosteli, hermana del finado Oscar Arosteli, pero para la familia es la tía Fachu. Enviudó hace ya muchos años y desde entonces a la soledad la sortea con bingo, quiniela, los burros y algunas copas de vino. Siempre vivió en la encrucijada de ser de cuna aristocrática pero tener cierta inclinación por el arrabál porteño. Los años acabaron por convertirla en una vieja ácida y resentida, pero yo siento que en el fondo todavía habita esa purreta que se paseaba por la milonga del brazo de su amado Horacio.",
        imagen: "/actores/actor1.jpg"
      },
      {
        nombre: "Vicente",
        descripcion: "Vicente Arostelli, 49 años. Hombre de campo, familia y negocios. Su pasión es el golf y explotar a sus empleados en los campos de soja al rayo del sol. Sus vacaciones son  siempre al caribe pero últimamente le aburre la rutina y está dispuesto a probar cosas nuevas. Cosas que ni el se imagina... La familia es lo más importante, luego del campo y la plata.",
        imagen: "/actores/actor2.jpg"
      },
      {
        nombre: "Ambar",
        descripcion: "Ámbar es la esposa de Vicente y madre de Delfina. Ella se autopercibe como un ser de luz pero dudo que lo sea, ya que sus acciones demuestran lo contrario. Se sabe muy poco de sus origenes o de como llegó a la familia pues Vicente siempre fue muy reservado con ese tema. Detrás de la ropa de lino y los cuarzos energeticos se esconde otra persona totalmente distinta pero dejaré que ustedes saquen sus propias conclusiones.",
        imagen: "/actores/actor3.jpg"
      },
      {
        nombre: "Delfina",
        descripcion: "Delfina es el rostro del nuevo paradigma de las redes sociales. Habla en 140 caracteres, le pregunta a la IA que es el amor, su rostro es un filtro de instagram y si pasas 40 minutos con ella la sensación de vacío es similar a la que queda después de un escroleo furioso en Tiktok. Pero cuidado, no se dejen engrupir por ese rostro tallado por los mismísimos algoritmos, detrás se esconde algo más que pide salir.",
        imagen: "/actores/actor4.jpg"
      }, 
      {
        nombre: "Alejandra",
        descripcion: "Les presento a Alejandra Arosteli, el estrés personificado. Esposa de Ricardo Peretti, madre de mellizos, luchadora incansable y aunque la vida la castiga duro a diario, ella no se rinde, pues tiene la esperanza de que lo mejor está por venir. Su caótica vida transcurre entre la cocina, los catálogos de Amodil y el tabaco. Pese al agotamiento es una persona sumamente generosa, siempre dispuesta a ayudar al prójimo. Poeta frustrada va por la vida con ojeras en su rostro y una sonrisa en el alma.",
        imagen: "/actores/actor5.jpg"
      },
      {
        nombre: "Dylan",
        descripcion: "Este simpático muchachito es Dylan Peretti, uno de los mellizos del Richard y la Ale. La gente siempre lo tilda de drogadicto y delincuente pero en realidad solo es un pibe mas al que le gusta vestir con ropa deportiva y lleva con orgullo quien es y de donde viene. Es estudiante de Ciencias políticas y se las rebusca para ganarse la vida. Sus principales referentes son Carl Marx y Carlos La mona Jimenez, pero también siente aprecio por la obra tanto de Mikhail Bakunin como del Loco Amato. ",
        imagen: "/actores/actor6.jpg"
      },
      {
        nombre: "Catalina",
        descripcion: "Hoy presentamos a Catalina, pero les aconsejo que la llamen Kato si no quieren comerse un botellazo en los dientes. Katito es una ferviente militante que vela por los derechos de los desposeidos, capaz de rescindir su vida antes que abandonar la lucha. Aún que podríamos decir que detrás de esa máscara irreverente se esconde una sensibilidad unica, lxs invito a que lo averigüen ustedes mismxs.",
        imagen: "/actores/actor7.jpg"
      },
      {
        nombre: "Ricardo",
        descripcion: "Ricardo Peretti, el Richard de la gente. Sobrevivió a los 80´ casi sin secuelas. Padre por negligencia y músico por insistencia, hizo del under una forma de vida. Esposo de Alejandra aunque mas que pareja, es un hijo mas…",
        imagen: "/actores/actor8.jpg"
      }
    ];

    return NextResponse.json(elenco, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/elenco:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
