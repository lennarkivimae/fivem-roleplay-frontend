/*
import React from 'react';

// import default context
// import Context from './page.config.js';

// import new modules
import Funds, { IFundsData } from "../modules/funds/funds";
import AdminPanel, { IAdminPanelData } from "../modules/adminPanel/adminPanel";
import Login, { ILoginData } from '../modules/login/login';
import Register, { IRegisterData } from '../modules/register/register';
import Modal, { IModalData } from '../components/modal/modal';
import Button from '../components/button/button';

interface IProps {}

interface IModuleStates {
    funds: IFundsData,
    adminPanel: IAdminPanelData,
    shownPanels: string[],
    login: ILoginData,
    register: IRegisterData,
    modal: IModalData
}

export default class Page extends React.Component<IProps, IModuleStates> {
    public modules: string[];
    //eslint-disable-next-line
    static context: React.Context<IModuleStates>;

    constructor(props: IProps) {
        super(props);
        this.state = Context;

        Page.context = React.createContext({
            funds: this.state.funds,
            adminPanel: this.state.adminPanel,
            shownPanels: [],
            login: this.state.login,
            register: this.state.register,
            modal: this.state.modal
        });
    }

    componentDidMount(): void {
        //eslint-disable-next-line
        window.addEventListener('message', (event: any) => {
            if (event.data !== undefined) {
                for (const module of Object.keys(this.state)) {
                    if (module === event.data.module) {
                        /!* @ts-ignore *!/
                        this.setState({
                            [module]: event.data.data
                        });
                    }
                }
            }
        });

        window.addEventListener('keyup', (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                this.setState({
                    shownPanels: []
                });
            }
        });
    }

    togglePanelVisibility(panel: string, state: boolean): void {
        if (state) {
            const newShownPanels: string[] = this.state.shownPanels;
            newShownPanels.push(panel);

            this.setState({
                shownPanels: newShownPanels
            });

            return;
        }

        const newShownPanels: string[] = this.state.shownPanels;
        newShownPanels.splice(this.state.shownPanels.indexOf(panel), 1);

        this.setState({
            shownPanels: newShownPanels
        });
    }

    clickHandler(event: React.MouseEvent): void {
        let nextState: string = '';

        if (this.state.modal.stateClass.length === 0) {
            nextState = 'is-flash'
        }

        const modalData: IModalData = this.state.modal;
        modalData.stateClass = nextState;

        this.setState({
            modal: modalData
        });
    }

    render(): JSX.Element {
        return (
            <div className="page">
                <Button onClick={this.clickHandler.bind(this)} class="" modifier="" data={{text: 'button'}} />
                <Page.context.Provider value={this.state}>
                    <Funds />
                    <AdminPanel class="page__adminPanel" modifier="" />
                    <Login />
                    <Register />
                    <Modal class="page__modal" modifier="" />
                </Page.context.Provider>
            </div>
        );
    }
}
*/
