import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
        super(props)

        this.state ={
            darkNavbar: false,
            sidebarOpened:false
        }

        this.toggleSidebar = this.toggleSidebar.bind(this)
        this.openSideBar = this.openSideBar.bind(this)
        this.closeSideBar = this.closeSideBar.bind(this)

    }
    
    componentDidMount(){
        let _this = this

        window.addEventListener("scroll", function(event) {
            var top = this.scrollY
            if(top > 20){
                _this.setState({
                    darkNavbar: true
                })

                let element = document.getElementById("navbar");
                if(element != null){
                  element.classList.add("navbar-bg");
                }


            }else{
                _this.setState({
                    darkNavbar: false
                })

                let element = document.getElementById("navbar");
                if(element != null){
                  element.classList.remove("navbar-bg");
                }
                


            }
        }, false);

    }

    toggleSidebar(){


        if(this.state.sidebarOpened == true){
            this.closeSideBar()
        }else{
            this.openSideBar()
        }

    }

    openSideBar(){
        this.setState({
            sidebarOpened: true
        })

        let element = document.getElementById("sidebar");
        element.classList.add("sidebar-open");
    }

    closeSideBar(){
        this.setState({
            sidebarOpened: false
        })

        let element = document.getElementById("sidebar");
        element.classList.remove("sidebar-open");
    }

    render(){
      return(
    <header>
      <nav class="navbar navbar-expand-lg fixed-top navbar-fixed-js">
        <div class="container">
          <div class="main-brand">
            <a class="navbar-brand" href="#">
              {/*<!-- <img width="130px" id="iso" src="assets/img/log.png" /> -->*/}
              UtilPesca
            </a>
            <button class="navbar-toggler p-0 border-0" data-toggle="offcanvas" type="button">
              <span class="navbar-toggler-icon fa fa-phone"></span>
            </button>
          </div>
          <div class="navbar-collapse offcanvas-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link mr-4" href="#banner">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-4" href="#productos">Productos</a>
              </li>
              {/*<li class="nav-item">
                <a class="nav-link mr-4" href="#clientes">Nuestros clientes</a>
              </li>*/}
              {/*<li class="nav-item">
                <a class="nav-link mr-4" href="#contacto">Contacto</a>
              </li>*/}
            </ul>
          </div>
        </div>
      </nav>

      <div id="cellphone-bar" class="solid-bg">
        <button class="navbar-toggler p-0 border-0 dark-btn" id="cellphone-btn" data-toggle="offcanvas" type="button" onClick={() => this.toggleSidebar()}>
          <span class="navbar-toggler-icon fa fa-bars"></span>
        </button>
      </div>

      <div id="sidebar">
        <div class="container">
          <div class="row">
            <div class="col col-12 sidebar-items">
              <h1 class="text-center"><a class="sidebar-link" href="#banner">Inicio</a></h1>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 sidebar-items">
              <h1 class="text-center">
                <a class="sidebar-link" href="#productos">Productos</a>
              </h1>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}

}

export default Header;