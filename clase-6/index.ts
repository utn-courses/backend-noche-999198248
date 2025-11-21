const book = {
  id: 12384,
  name: "Ficciones",
  idAuthor: 1001,
  authorAge: 44,
  publisher: "Editorial Sur",
  genres: ["Fantasía", "Filosofía", "Cuento"],
  pagesCount: 210,
  booksCount: 12,
  available: true,
  index: {
    theme1: {
      id: 1,
      page: 1,
      title: "El comienzo de todo"
    },
    theme2: {
      id: 2,
      page: 25,
      title: "El mal de tus ojos"
    }
  }
}

const book2 = {
  id: 45621,
  name: "El Aleph",
  author: "Jorge Luis Borges",
  authorYear: 50,
  publisher: "Editorial Losada",
  genres: ["Fantasía", "Metaficción", "Cuento"],
  pagesCount: 224,
  booksCount: 10,
  available: true,
  index: {
    theme1: {
      id: 1,
      page: 9,
      title: "El inmortal"
    },
    theme2: {
      id: 2,
      page: 45,
      title: "El Aleph"
    }
  }
}

const author = {
  id: 1001,
  name: "Jorge Luis Borges",
  birthYear: 1899,
  deathYear: 1986,
  nationality: "Argentina",
  genres: ["Fantasía", "Filosofía", "Metaficción", "Cuento"],
  works: [
    {
      id: 1,
      idBook: 12384
    },
    {
      id: 2,
      idBook: 45621
    }
  ],
  awards: ["Premio Miguel de Cervantes", "Premio Internacional Alfonso Reyes", "Premio Formentor"],
  biography: {
    earlyLife: "Nació en Buenos Aires y pasó su infancia entre Argentina y Europa.",
    career: "Fue bibliotecario, traductor, profesor y director de la Biblioteca Nacional.",
    legacy: "Considerado uno de los escritores más influyentes del siglo XX en lengua española."
  }
}

const client = {
  id: 501,
  name: "Lucía Ramírez",
  email: "lucia.ramirez@example.com",
  membership: "premium",
  address: "Av. Belgrano 1234, San Justo, Santa Fe, Argentina",
}

const loan = {
  id: 1,
  idBook: 12384,
  idUser: 501,
  requestDate: "2025-11-20",
  delivery: {
    method: "envío a domicilio",
    estimatedDeliveryDays: 3
  },
  status: "pendiente",
  notes: "Solicita copia con tapa dura si está disponible."
}