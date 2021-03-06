const BooksForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Category:
        <select>
          {categories.map(cat=>(
            <option value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BooksForm;