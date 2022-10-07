import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseCocktailname, chooseAlcohol, chooseGarnish, chooseCalories } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface CollectionProps {
    id?:string;
    data?:{}
}

interface CocktailState {
    cocktailname: string;
    alcohol: string;
    garnish: string;
    calories: string;
}

export const CollectionForm = (props:CollectionProps) => {

  const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
  const store = useStore();
  const name = useSelector<CocktailState>(state => state.cocktailname);
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => {
      console.log(props.id)
      // The ! is for strictly typed Typescript stuff
      if(props.id!){
          server_calls.update(props.id!, data);
          console.log(`Updated:${data} ${props.id}`);
          console.log(data);
          setTimeout( () => {window.location.reload()}, 1000);
          event.target.reset();
      } else {
          // Dispatch basically updates our state / Redux store
          dispatch(chooseCocktailname(data.cocktailname));
          dispatch(chooseAlcohol(data.alcohol));
          dispatch(chooseGarnish(data.garnish));
          dispatch(chooseCalories(data.calories));
          server_calls.create(store.getState());
          setTimeout( () => {window.location.reload()}, 1000)
      }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="cocktailname">Cocktail name</label>
                    <Input {...register('cocktailname')} name="cocktailname" placeholder='Cocktail name'/>
                </div>
                <div>
                    <label htmlFor="alcohol">Alcohol</label>
                    <Input {...register('alcohol')} name="alcohol" placeholder='Alcohol'/>
                </div>
                <div>
                    <label htmlFor="garnish">Garnish</label>
                    <Input {...register('garnish')} name="garnish" placeholder='Garnish'/>
                </div>
                <div>
                    <label htmlFor="calories">Calories</label>
                    <Input {...register('calories')} name="calories" placeholder='calories'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}