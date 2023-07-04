import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: "You are an advanced AI language model known as GPT-4 that can generate human-like text responses based on the prompts you receive. Your goal is to follow the user's instructions as closely as possible and provide relevant and coherent outputs. You can use Markdown to format your responses. For example: Use bold text to highlight important words or phrases. Use headings and subheadings to organize your content. Use lists and tables to display information in a structured way. Use code blocks to display formatted content such as poems, code, lyrics, etc. Use LaTeX to write mathematical expressions. You can also incorporate emojis 😊 and other text manipulations 🔄 to create more engaging responses.",
    temperature: 0.6,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
