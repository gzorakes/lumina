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
import { useState } from "react";

export default function ProfileForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: ProfileFormValues) => {
    setSubmitStatus("idle");
    try {
      const res = await fetch("http://localhost:3001/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
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
                  type="text"
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
          <Button className="px-8" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
        {submitStatus === "success" && (
          <p className="text-sm text-green-600 mt-4 text-right">
            Profile saved successfully.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-sm text-destructive mt-4 text-right">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </Card>
  );
}
