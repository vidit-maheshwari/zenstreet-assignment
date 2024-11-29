'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Facebook, Mail, X, Copy, Check } from 'lucide-react'
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const pageUrl = "http://www.therapist-swetha.com/profile/view"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl)
      setCopied(true)
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
        duration: 2000,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Share</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-8 py-6">
          <button className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition-colors">
              <Facebook className="h-6 w-6" />
            </div>
            <span className="text-sm text-gray-600">Facebook</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition-colors">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <span className="text-sm text-gray-600">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition-colors">
              <X className="h-6 w-6" />
            </div>
            <span className="text-sm text-gray-600">Twitter</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <span className="text-sm text-gray-600">Mail</span>
          </button>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
          <input
            className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2"
            type="text"
            value={pageUrl}
            readOnly
          />
          <Button 
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className={`transition-all duration-200 ${
              copied 
                ? 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700' 
                : 'hover:bg-gray-200'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy link
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
