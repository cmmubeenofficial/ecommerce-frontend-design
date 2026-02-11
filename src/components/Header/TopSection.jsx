function TopSection() {
  return (
    <>
      <main className="conntainer">
        {/* logo */}
        <section className="logo-conatiner">
          <img src="/public/Brand/logo-colored.png" alt="brand logo" />
        </section>

        {/* search bar */}
        <section className="search-bar-container border border-amber-500">
          <input type="search" name="cat-search" />
          <select name="cat-dropdown">
            <option value="All category">All category</option>
          </select>
          <button>Search</button>
        </section>

        {/* profile options */}
        <section className="profile-conatiner">
          <button className="profile">
            <img src="/public/icons/profile.svg" alt="profile button" />
            <span>Profile</span>
          </button>
          <button className="message">
            <img src="/public/icons/message.svg" alt="message button" />
            <span>Message</span>
          </button>
          <button className="orders">
            <img src="/public/icons/orders.svg" alt="orders button" />
            <span>Orders</span>
          </button>
          <button className="cart">
            <img src="/public/icons/cart.svg" alt="cart button" />
            <span>My cart</span>
          </button>
        </section>
      </main>
    </>
  )
}

export default TopSection