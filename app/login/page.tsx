"use client"
import { useState } from "react";
import styles from './page.module.scss'

interface LoginForm {
  login: string;
  password: string;
}

export default function Home() {
  const [form, setForm] = useState<LoginForm>({ login: '', password: '' });


  const handleLoginChange = (login: string) => {
    setForm(form => {
      return {
        ...form,
        login
      }
    });
  }

  const handlePasswordChange = (password: string) => {
    setForm(form => {
      return {
        ...form,
        password
      }
    });
  }

  const submit = () => {
    console.log(form)
  }

  return (
    <div className={styles.logins}>
      <div className={styles.title}>Sign in to my Profile</div>
      <div className={styles.box}>
        <button className={styles.google} onClick={submit}><div className={styles.icon}></div>Continue with Google</button>
        <span className={styles.span}> or </span>
        <div className={styles.span}> or </div>
        <input className={styles.input} value={form.login} onChange={event => handleLoginChange(event.target.value)} placeholder="Login" type="login" />
        <input className={styles.input} value={form.password} onChange={event => handlePasswordChange(event.target.value)} placeholder="Password" type="password" />
        <button className={styles.button} onClick={submit}>Log in</button>
        <div className={styles.title}></div>
        <div><a className={styles.blue_link} href="#">Use single sing-on</a></div>
        <div><a className={styles.blue_link} href="#">Reset password</a></div>
        <div className={styles.silver}>No account?&nbsp;<a  className={styles.blue_link} href="/Create one">Create one</a></div>
      </div>
    </div>
  )
}

