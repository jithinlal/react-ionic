import React from 'react';
import {
	IonButton,
	IonCol,
	IonContent,
	IonInput,
	IonItem,
	IonLabel,
	IonPage,
	IonRow,
} from '@ionic/react';
import NavHeader from '../components/Header/NavHeader';

const Login = () => {
	return (
		<IonPage>
			<NavHeader title='Log In' />
			<IonContent>
				<IonItem lines='full'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput name='email' type='text' required />
				</IonItem>
				<IonItem lines='full'>
					<IonLabel position='floating'>Password</IonLabel>
					<IonInput name='password' type='password' required />
				</IonItem>
				<IonRow>
					<IonCol>
						<IonButton type='submit' color='primary' expand='block'>
							Log In
						</IonButton>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonRouterLink routerLink={'/forgot'}>
							Forgot Password?
						</IonRouterLink>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Login;
