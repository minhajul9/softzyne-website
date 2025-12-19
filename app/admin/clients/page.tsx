"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Edit, Trash2 } from "lucide-react"
import { clientsDB, type Client } from "@/lib/mock-db"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>(clientsDB.getAll())
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    website: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingClient) {
      clientsDB.update(editingClient.id, formData)
    } else {
      clientsDB.create(formData)
    }
    setClients(clientsDB.getAll())
    setIsDialogOpen(false)
    resetForm()
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this client?")) {
      clientsDB.delete(id)
      setClients(clientsDB.getAll())
    }
  }

  const handleEdit = (client: Client) => {
    setEditingClient(client)
    setFormData({
      name: client.name,
      logo: client.logo,
      website: client.website || "",
    })
    setIsDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({ name: "", logo: "", website: "" })
    setEditingClient(null)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Clients Management</h1>
          <p className="text-muted-foreground">Manage your client portfolio</p>
        </div>
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open)
            if (!open) resetForm()
          }}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingClient ? "Edit Client" : "Add New Client"}</DialogTitle>
              <DialogDescription>Fill in the client details below.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Client Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="logo">Logo URL</Label>
                <Input
                  id="logo"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  placeholder="/client-logo.png"
                  required
                />
              </div>
              <div>
                <Label htmlFor="website">Website (optional)</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {editingClient ? "Update Client" : "Create Client"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client) => (
          <Card key={client.id} className="relative group">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-4 bg-muted rounded-lg overflow-hidden">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain p-4" />
              </div>
              <h3 className="font-semibold text-center mb-2">{client.name}</h3>
              <div className="flex gap-2 justify-center">
                <Button variant="ghost" size="sm" onClick={() => handleEdit(client)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(client.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
