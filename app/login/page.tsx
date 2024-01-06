"use client"
import { useState } from "react";
import styles from './page.module.scss'

interface LoginForm {
  login: string; 
  password: string;
}

export default function Home() {
  const [form, setForm] = useState<LoginForm>({login: '', password: ''}); 


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
    <div>
     <input value={form.login} onChange={event => handleLoginChange(event.target.value)} type="text"/>
     <input value={form.password} onChange={event => handlePasswordChange(event.target.value)} type="text"/>
     <button className={styles.button} onClick={submit}>Submit</button>
    </div>
  )
}
