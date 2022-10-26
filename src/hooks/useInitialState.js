import useLocalStorage from "./useLocalStorage";
import { useState, useEffect } from "react";

const useInitialState = () => {
  const localStorage = useLocalStorage();
  const [state, setState] = useState(null);

  useEffect(() => {
    localStorage.saveInitialState();
    setState(localStorage.getItem("state"));
  }, []);

  const getPhotos = () => state.photos;
  const getUsers = () => state.users;
  const getCategories = () => state.categories;

  const getPhoto = (id) => state.photos.filter((photo) => photo.id === id);
  const getUser = (id) => state.users.filter((user) => user.id === id);
  const getCategory = (id) =>
    state.categories.filter((category) => category.id === id);

  const setFav = (id, value) => {
    const newPhotos = state.photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, liked: value };
      }
      return photo;
    });
    setState({ ...state, photos: newPhotos });
  };

  const setLikes = (id, value) => {
    const newPhotos = state.photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, likes: value };
      }
      return photo;
    });
    setState({ ...state, photos: newPhotos });
  };

  return {
    getPhotos,
    getUsers,
    getCategories,
    getPhoto,
    getUser,
    getCategory,
    setFav,
    setLikes,
    state,
  };
};

export default useInitialState;
