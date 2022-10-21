import React,{Component}from 'react';

export const Moviesprovider = React.createContext()

class Moviescontext extends React.Component{

    constructor(){
        super();
        this.state={
            director: 'Rahat',
            movie: 'ahare jibon',
        }

    }
    render(){
        return<Moviesprovider.Provider value={{...this.state}}>
            {this.props.children}
        </Moviesprovider.Provider>
    }
}

export default Moviescontext
