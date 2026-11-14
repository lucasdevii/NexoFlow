<script setup lang="ts">
import { ref } from 'vue'

import '@/assets/styles/components/buttons.css'

import type UserModel from '@/types/userType'
import { userLogin } from '@/services/user/auth/authService'


const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

async function handleLogin() {
  
  const infos : UserModel = {
    email: email.value,
    password: password.value
  }

  try{
    const response = userLogin(infos)
    console.log(response)
  }catch(error){
    console.log("Erro ao fazer login.")
  }
}
</script>

<template>
  <main class="login-page">
    <section class="brand-panel">
      <div class="brand-content">
        <div class="brand">
          <div class="brand-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M8 28V12L20 5L32 12V28L20 35L8 28Z"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M8 12L20 20L32 12M20 20V35"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
          <span>NexoFlow</span>
        </div>

        <div class="hero">
          <span class="eyebrow">
            <span class="status-dot"></span>
            WORKSPACE MANAGEMENT
          </span>

          <h1>
            Seu trabalho.<br />
            <span>Conectado.</span><br />
            Em movimento.
          </h1>

          <p>
            Organize equipes, acompanhe processos e transforme
            a complexidade da sua operação em clareza.
          </p>
        </div>
      </div>

      <div class="panel-footer">
        <span>© 2026 NexoFlow</span>
        <span>Built for better workflows.</span>
      </div>
    </section>

    <section class="form-panel">
      <div class="form-container">
        <div class="mobile-brand">
          <div class="brand-icon">
            <span>N</span>
          </div>
          <span>NexoFlow</span>
        </div>

        <div class="form-heading">
          <span class="welcome-label">BEM-VINDO DE VOLTA</span>
          <h2>Acesse sua conta</h2>
          <p>Insira seus dados para acessar seu workspace.</p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="field">
            <label for="email">E-mail corporativo</label>
            <div class="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="3"
                  stroke="currentColor" stroke-width="1.6" />
                <path d="M4 7L12 13L20 7"
                  stroke="currentColor" stroke-width="1.6" />
              </svg>

              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="nome@empresa.com"
                autocomplete="email"
                required
              />
            </div>
          </div>

          <div class="field">
            <div class="label-row">
              <label for="password">Senha</label>
              <a href="#" class="forgot-link">Esqueceu a senha?</a>
            </div>

            <div class="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="10" width="16" height="11" rx="2"
                  stroke="currentColor" stroke-width="1.6" />
                <path d="M8 10V7a4 4 0 018 0v3"
                  stroke="currentColor" stroke-width="1.6" />
              </svg>

              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Digite sua senha"
                autocomplete="current-password"
                required
              />

              <button
                type="button"
                class="password-toggle"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
              >
                {{ showPassword ? 'Ocultar' : 'Mostrar' }}
              </button>
            </div>
          </div>

          <label class="remember">
            <input v-model="rememberMe" type="checkbox" />
            <span class="custom-checkbox"></span>
            Manter conectado
          </label>

          <button type="submit" class="submit-button">
            Entrar na plataforma
            <span>→</span>
          </button>
        </form>

        <div class="separator">
          <span></span>
          <p>ACESSO SEGURO</p>
          <span></span>
        </div>

        <p class="security-note">
          Seus dados são protegidos e suas informações
          permanecem privadas.
        </p>

        <p class="signup">
          Ainda não possui um workspace?
          <a href="#">Entre em contato</a>
        </p>
      </div>

      <div class="form-footer">
        <span>Privacidade</span>
        <span>Termos de uso</span>
        <span>Suporte</span>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
}

.login-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'DM Sans', sans-serif;
  color: #202536;
  background: #f8f9fc;
}

/* BRAND PANEL */

.brand-panel {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 48px 9%;
  background:
    radial-gradient(ellipse at 80% 75%, #253d73 0%, transparent 45%),
    linear-gradient(145deg, #10182c, #111e38 60%, #172746);
  color: #fff;
}

.brand-content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.8px;
}

.brand-icon {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  border: 1px solid #ffffff30;
  border-radius: 11px;
  background: #ffffff10;
  color: #a8baff;
}

.brand-icon svg {
  width: 27px;
}

.hero {
  margin-top: auto;
  margin-bottom: 30vh;
  max-width: 500px;
}

.eyebrow,
.welcome-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #a8b8d7;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #7d9dff;
  box-shadow: 0 0 12px #7d9dff;
}

.hero h1 {
  margin: 27px 0 22px;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(42px, 5vw, 67px);
  line-height: 1.12;
  letter-spacing: -3px;
  font-weight: 700;
}

.hero h1 span {
  color: #91aaff;
}

.hero p {
  max-width: 390px;
  color: #aab6ce;
  font-size: 15px;
  line-height: 1.9;
}

.bottom-info {
  position: relative;
  height: 115px;
  display: flex;
  align-items: flex-end;
  color: #8799b9;
  font-size: 12px;
}

.panel-footer {
  display: flex;
  justify-content: space-between;
  color: #72809b;
  font-size: 11px;
}

/* FORM PANEL */
.form-panel {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px 9% 25px;
  position: relative;
}

.form-container {
  width: 100%;
  max-width: 400px;
}

.form-heading {
  margin-bottom: 38px;
}

.welcome-label {
  color: #7185c2;
}

.form-heading h2 {
  margin: 15px 0 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 31px;
  letter-spacing: -1.2px;
  color: #1e2639;
}

.form-heading p {
  margin: 0;
  color: #8991a2;
  font-size: 13px;
}

.field {
  margin-bottom: 24px;
}

.field label {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #3d465a;
}

.input-wrapper {
  height: 51px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 15px;
  border: 1px solid #e2e5ed;
  border-radius: 9px;
  background: #fff;
  transition: .2s ease;
}

.input-wrapper:focus-within {
  border-color: #7589d4;
  box-shadow: 0 0 0 3px #7589d41c;
}

.input-wrapper svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #929bad;
}

.input-wrapper input {
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #293249;
  font: inherit;
  font-size: 13px;
}

.input-wrapper input::placeholder {
  color: #b3bac8;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.forgot-link,
.signup a {
  color: #657cc5;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}

.password-toggle {
  border: 0;
  background: transparent;
  color: #7583a0;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

.remember {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #737d90;
  font-size: 12px;
  cursor: pointer;
  margin: 4px 0 27px;
}

.remember input {
  position: absolute;
  opacity: 0;
}

.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #d6dce7;
  border-radius: 4px;
  background: #fff;
}

.remember input:checked + .custom-checkbox {
  background: #647bc5;
  border-color: #647bc5;
  box-shadow: inset 0 0 0 3px white;
}

.separator {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 32px 0 18px;
}

.separator span {
  flex: 1;
  height: 1px;
  background: #e8eaf0;
}

.separator p {
  color: #a1a9b8;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.3px;
}

.security-note {
  text-align: center;
  color: #929aaa;
  font-size: 11px;
  line-height: 1.8;
}

.signup {
  margin-top: 48px;
  text-align: center;
  font-size: 12px;
  color: #929aaa;
}

.form-footer {
  position: absolute;
  bottom: 25px;
  display: flex;
  gap: 24px;
  color: #a3aaba;
  font-size: 10px;
}

.mobile-brand {
  display: none;
}

@media (max-width: 850px) {
  .login-page {
    grid-template-columns: 0.85fr 1.15fr;
  }

  .brand-panel {
    padding: 35px 8%;
  }

  .hero h1 {
    font-size: 45px;
  }

  .form-panel {
    padding: 40px 7%;
  }
}

@media (max-width: 650px) {
  .login-page {
    display: block;
    min-height: 100vh;
  }

  .brand-panel {
    display: none;
  }

  .form-panel {
    min-height: 100vh;
    padding: 35px 25px 70px;
  }

  .mobile-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 55px;
    font-family: 'Manrope';
    font-size: 20px;
    font-weight: 800;
  }

  .form-container {
    max-width: 420px;
  }

  .form-footer {
    gap: 18px;
  }
}
</style>
