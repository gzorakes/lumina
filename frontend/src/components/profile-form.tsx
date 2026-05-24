import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function ProfileForm() {
  return (
    <Card className="max-w-3xl mb-14">
      <form className="px-6">
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input id="fullName" placeholder="Alex Rivera" />
            </Field>

            <Field>
              <FieldLabel htmlFor="dob">Date of Birth</FieldLabel>
              <Input id="dob" type="date" />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="email"
                  type="email"
                  placeholder="alex.rivera@lumina.io"
                />
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
                <InputGroupAddon>
                  <Phone />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>

          <FieldSeparator />

          <Field>
            <FieldLabel htmlFor="bio">Biography</FieldLabel>
            <Textarea
              id="bio"
              rows={4}
              placeholder="Product Designer focused on building precision-driven interfaces and minimalist design systems"
            />
          </Field>
        </FieldGroup>

        <div className="flex justify-end items-center gap-4 mt-10">
          <Button
            type="button"
            variant="ghost"
            className="text-muted-foreground"
          >
            Cancel
          </Button>
          <Button type="submit" className="px-8">
            Save Changes
          </Button>
        </div>
      </form>
    </Card>
  );
}
