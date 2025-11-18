import crypto from 'crypto'

let notes = [
  {
    id: crypto.randomUUID(),
    title: "Go to supermarket",
    description: "Buy juice, beans and rice",
    date: "10/11/2025",
  },
  {
    id: crypto.randomUUID(),
    title: "Buy a new notebook",
    description: "Get a fast notebook to work",
    date: "20/12/2025",
  },
  {
    id: crypto.randomUUID(),
    title: "Create new app",
    description: "Create new app to improve skills",
    date: "21/12/2025",
  },
];

export const create = async (data) => {
  const newNote = {...data, id: crypto.randomUUID() }
  const updateList = [...notes, newNote];
  notes = updateList;
  return newNote;
}

export const get = async (data) => {
  const note = notes.find(x => x.id == data?.id);
  return note;
}

export const change = async (data) => {
  const registerIndex = notes.findIndex(x => x.id == data.id);
  if (registerIndex === -1) throw new Error('I was not possible to find register');
  const list = [...notes];
  list[registerIndex] = {
      ...list[registerIndex],
      title: data.title,
      description: data.description,
      date: data.date
  }
  notes = list;
  return list[registerIndex];
}

export const remove = async (id) => {
  const currentList = [...notes];
  const registerIndex = currentList.findIndex(item => item.id == id);
  currentList.splice(registerIndex, 1);
  notes = currentList;
  return notes;
}

export const getAll = async () => {
  return notes;
}
