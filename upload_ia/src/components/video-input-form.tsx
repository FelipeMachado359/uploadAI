import { FileVideo, Upload } from "lucide-react"
import { Separator } from "@radix-ui/react-select"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState, ChangeEvent } from "react"

export function VideoInputForm() {

    const [videoFile, setVideoFile] = useState<File | null >(null)

    function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.currentTarget

        if (!files) {
            return
        }

        const selectedFile = files[0]

        setVideoFile(selectedFile)
    }

    return(
        <form className="space-y-6">
        <label
            htmlFor="video"
            className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
          
          {videoFile ? 'oi' : (
            <>
            <FileVideo className="w-4 h-4"/>
            Selecione um vídeo
            </>
          )}
        </label>

        <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected}/>

        <Separator/>

        <div className="space-y-2">
          <Label htmlFor="transcription_prompt">Prompt de trascrição</Label>
          <Textarea 
          id="transcription_prompt" 
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgulas ( , )"
          />
        </div>

        <Button type="submit" className="w-full">
          Carregar vídeo
          <Upload className="w-4 h-4 ml-2"/>
        </Button>
      </form>
    )
}