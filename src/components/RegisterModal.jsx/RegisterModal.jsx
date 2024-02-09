import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  agree: z.boolean(),
});

function Registermodal() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  const [isLegalEntity, setIsLegalEntity] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this line

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitting(false);
  };

  return (
    <div className="App">
      <div className="modal">
        <div>
          <button onClick={() => setIsLegalEntity(false)}>Физ. лицо</button>
          <button onClick={() => setIsLegalEntity(true)}>Юр. лицо</button>
        </div>
        
        <form className='p-6 flex flex-col gap-2.5 w-35vw rounded-formradius shadow-xl justify-evenly' onSubmit={handleSubmit(onSubmit)}>
          <input className='bg-gray-200 rounded-lg p-3 m-1' {...register('name')} placeholder="Ваша фамилия и имя" />
          {errors.name && <p>{errors.name.message}</p>}
          
          <input className='bg-gray-200 rounded-lg p-3' {...register('phone')} placeholder="+998 00 000-00-00" />
          {errors.phone && <p>{errors.phone.message}</p>}
          
          <input className='bg-gray-200 rounded-lg p-3' {...register('address')} placeholder="Укажите адрес доставки" />
          {errors.address && <p>{errors.address.message}</p>}
          
          <div className='flex flex-row gap-2.5'>
           <input className='bg-gray-200 rounded-lg p-3' type="checkbox" {...register('agree')} />
           <label>Я согласен на обработку персональных данных</label>
          </div>
          
          <button className={`rounded-3xl py-2 text-white ${isSubmitting ? 'bg-gray-500' : 'bg-black'}`} type='submit' disabled={isSubmitting}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    
    </div>
  );
}

export default Registermodal;