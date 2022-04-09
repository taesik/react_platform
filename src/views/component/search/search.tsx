import {useState} from 'react';

const Search: React.FC =() => {

  const [term, setTerm] = useState('');
  const onSubmit: React.FormEventHandler<HTMLFormElement> =(e)=>{
    e.preventDefault();

    //submit시 action을 dispatch 할꺼임


  }

  return(
    <>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e)=> setTerm(e.target.value)}/>
        <button>search</button>
      </form>
    </>
  )
}

export default Search;
