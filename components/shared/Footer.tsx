import { MessageSquareText } from 'lucide-react'


const Footer = () => {
  return (
   
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center 
        justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ToLet. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MessageSquareText className="h-4 w-4" />
            <span>support@ToLet.com</span>
          </div>
        </div>
      </footer>
  )
}

export default Footer