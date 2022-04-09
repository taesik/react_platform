import {useState} from 'react';

const Search: React.FC =() => {

  const [term, setTerm] = useState('');
  const onSubmit: React.FormEventHandler<HTMLFormElement> =(e)=>{
    e.preventDefault();



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
