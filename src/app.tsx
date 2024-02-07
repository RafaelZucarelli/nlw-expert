import logo from './assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-card'
import { NewNoteCard} from './components/new-note-card'

export function App() {
  return (
    // Centralizando mx (left & rigth como auto) / max width / my-12 margem top e bottom & 12 = 48px
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert"/>

    {/* w-full = ocupa a tela toda*/}
    <form className="w-full mt-6">
      <input 
        type="text" 
        placeholder="Busque em suas notas..." 
        className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500"
      />
      </form>

    {/* Separador (linha)*/}
    <div className="h-px bg-slate-700" />

    {/* Grids/cards*/}
    <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
      <NewNoteCard />
        
        {/* Componetização - note-card.tsx*/}
        <NoteCard note={{
        date: new Date(),
        content:"Hello World"
         }} />
        
        
      </div>
    </div>
  )
}
