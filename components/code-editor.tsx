"use client"

import { useEffect, useRef } from "react"
import { Editor } from "@monaco-editor/react"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language?: string
  height?: string
}

export function CodeEditor({ value, onChange, language = "markdown", height = "200px" }: CodeEditorProps) {
  const editorRef = useRef<any>(null)

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onChange(value)
    }
  }

  // Apply neobrutalism styling to the editor
  useEffect(() => {
    if (editorRef.current) {
      // This is where we could add custom CSS to the editor if needed
      const editorElement = editorRef.current.getDomNode()
      if (editorElement) {
        editorElement.style.fontFamily = "'Menlo', 'Monaco', 'Courier New', monospace"
      }
    }
  }, [editorRef.current])

  return (
    <div className="code-editor-container" style={{ height }}>
      <Editor
        height="100%"
        language={language}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          wordWrap: "on",
          wrappingIndent: "same",
          automaticLayout: true,
          tabSize: 2,
          fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
          padding: { top: 16, bottom: 16 },
        }}
        theme="vs"
      />
    </div>
  )
}
