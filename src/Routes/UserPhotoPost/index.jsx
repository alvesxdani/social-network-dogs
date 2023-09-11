import React, { useEffect, useState } from 'react';
import { StyledUserPhotoPost } from './style';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import useForm from '../../Utils/useForm';
import useFetch from '../../Utils/useFetch';
import { PHOTO_POST } from '../../Api/api';
import ErrorMsg from '../../Components/ErrorMsg';
import { useNavigate } from 'react-router-dom';

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <StyledUserPhotoPost className="animeLeft">
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button content="Carregando" disabled />
        ) : (
          <Button content="Enviar" />
        )}
        <ErrorMsg error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className="preview"
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </StyledUserPhotoPost>
  );
}

export default UserPhotoPost;
