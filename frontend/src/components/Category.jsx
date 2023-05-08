import {Link} from 'react-router-dom';

const Category = ({data}) => {
  return (
    <>
    <div className="container category-title">
        <Link to={'/'} className="category-title-link">Nextstore</Link> /
        <Link to={'/catalog'} className="category-title-link">barchasi</Link>
    </div>
    <div className='container category'>
        {
            data.length === 0 ? <h1>No categories</h1>:
            data.map(category=>(
                <Link key={category.id} to='/' className="category-item">
                    <img src={category.img} alt={category.name} />
                    <p>{category.name}</p>
                    <span>{category.quantity} ta maxsulot</span>
                </Link>
            ))
        }
    </div>
    </>
  );
}

export default Category;
