"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldError,
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
import { profileSchema, type ProfileFormValues } from "@/lib/profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <Card className="max-w-3xl mb-14">
      <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
              <Input
                {...register("fullName")}
                id="fullName"
                placeholder="Alex Rivera"
              />
              <FieldError errors={[errors.fullName]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>
              <Input
                {...register("dateOfBirth")}
                id="dateOfBirth"
                type="date"
              />
              <FieldError errors={[errors.dateOfBirth]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="alex.rivera@lumina.io"
                />
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
              </InputGroup>
              <FieldError errors={[errors.email]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...register("phone")}
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
                <InputGroupAddon>
                  <Phone />
                </InputGroupAddon>
              </InputGroup>
              <FieldError errors={[errors.phone]} />
            </Field>
          </div>

          <FieldSeparator />

          <Field>
            <FieldLabel htmlFor="bio">Biography</FieldLabel>
            <Textarea
              {...register("bio")}
              id="bio"
              rows={4}
              placeholder="Product Designer focused on building precision-driven interfaces and minimalist design systems"
            />
            <FieldError errors={[errors.bio]} />
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
