﻿namespace CafeShopManagementSystem
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label6 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.login_registerBtn = new System.Windows.Forms.Button();
            this.close = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.login_username = new System.Windows.Forms.TextBox();
            this.login_password = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.login_showPass = new System.Windows.Forms.CheckBox();
            this.login_btn = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.bindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(99)))), ((int)(((byte)(102)))));
            this.panel1.Controls.Add(this.label6);
            this.panel1.Controls.Add(this.pictureBox1);
            this.panel1.Controls.Add(this.label5);
            this.panel1.Controls.Add(this.login_registerBtn);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.panel1.ForeColor = System.Drawing.Color.White;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(326, 484);
            this.panel1.TabIndex = 0;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(99)))), ((int)(((byte)(102)))));
            this.label6.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(12, 239);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(305, 22);
            this.label6.TabIndex = 12;
            this.label6.Text = "Cafe Shop Management System";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(99)))), ((int)(((byte)(102)))));
            this.label5.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.ForeColor = System.Drawing.Color.White;
            this.label5.Location = new System.Drawing.Point(89, 397);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(149, 19);
            this.label5.TabIndex = 10;
            this.label5.Text = "Create an Account";
            this.label5.Click += new System.EventHandler(this.label5_Click);
            // 
            // login_registerBtn
            // 
            this.login_registerBtn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(99)))), ((int)(((byte)(102)))));
            this.login_registerBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.login_registerBtn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_registerBtn.ForeColor = System.Drawing.Color.White;
            this.login_registerBtn.Location = new System.Drawing.Point(26, 428);
            this.login_registerBtn.Name = "login_registerBtn";
            this.login_registerBtn.Size = new System.Drawing.Size(270, 35);
            this.login_registerBtn.TabIndex = 9;
            this.login_registerBtn.Text = "REGISTER";
            this.login_registerBtn.UseVisualStyleBackColor = false;
            this.login_registerBtn.Click += new System.EventHandler(this.button2_Click);
            // 
            // close
            // 
            this.close.AutoSize = true;
            this.close.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.close.Location = new System.Drawing.Point(653, 9);
            this.close.Name = "close";
            this.close.Size = new System.Drawing.Size(20, 19);
            this.close.TabIndex = 1;
            this.close.Text = "X";
            this.close.Click += new System.EventHandler(this.close_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.BackColor = System.Drawing.Color.White;
            this.label2.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(353, 133);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(79, 22);
            this.label2.TabIndex = 2;
            this.label2.Text = "SIGN IN";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.BackColor = System.Drawing.Color.White;
            this.label3.Font = new System.Drawing.Font("Arial", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(354, 182);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(84, 18);
            this.label3.TabIndex = 3;
            this.label3.Text = "Username:";
            this.label3.Click += new System.EventHandler(this.label3_Click);
            // 
            // login_username
            // 
            this.login_username.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_username.Location = new System.Drawing.Point(357, 216);
            this.login_username.Name = "login_username";
            this.login_username.Size = new System.Drawing.Size(265, 24);
            this.login_username.TabIndex = 4;
            this.login_username.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // login_password
            // 
            this.login_password.Font = new System.Drawing.Font("Microsoft Sans Serif", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_password.Location = new System.Drawing.Point(357, 286);
            this.login_password.Name = "login_password";
            this.login_password.PasswordChar = '*';
            this.login_password.Size = new System.Drawing.Size(265, 24);
            this.login_password.TabIndex = 6;
            this.login_password.TextChanged += new System.EventHandler(this.textBox2_TextChanged);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.BackColor = System.Drawing.Color.White;
            this.label4.Font = new System.Drawing.Font("Arial", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(354, 252);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(81, 18);
            this.label4.TabIndex = 5;
            this.label4.Text = "Password:";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // login_showPass
            // 
            this.login_showPass.AutoSize = true;
            this.login_showPass.Font = new System.Drawing.Font("Arial", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_showPass.Location = new System.Drawing.Point(358, 320);
            this.login_showPass.Name = "login_showPass";
            this.login_showPass.Size = new System.Drawing.Size(139, 22);
            this.login_showPass.TabIndex = 7;
            this.login_showPass.Text = "Show Password";
            this.login_showPass.UseVisualStyleBackColor = true;
            // 
            // login_btn
            // 
            this.login_btn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(7)))), ((int)(((byte)(99)))), ((int)(((byte)(102)))));
            this.login_btn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.login_btn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.login_btn.ForeColor = System.Drawing.Color.White;
            this.login_btn.Location = new System.Drawing.Point(357, 365);
            this.login_btn.Name = "login_btn";
            this.login_btn.Size = new System.Drawing.Size(113, 35);
            this.login_btn.TabIndex = 8;
            this.login_btn.Text = "LOGIN";
            this.login_btn.UseVisualStyleBackColor = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = global::CafeShopManagementSystem.Properties.Resources.tea;
            this.pictureBox1.Location = new System.Drawing.Point(116, 111);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(102, 109);
            this.pictureBox1.TabIndex = 11;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(685, 484);
            this.Controls.Add(this.login_btn);
            this.Controls.Add(this.login_showPass);
            this.Controls.Add(this.login_password);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.login_username);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.close);
            this.Controls.Add(this.panel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.bindingSource1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label close;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox login_username;
        private System.Windows.Forms.TextBox login_password;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button login_registerBtn;
        private System.Windows.Forms.CheckBox login_showPass;
        private System.Windows.Forms.Button login_btn;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.BindingSource bindingSource1;
        private System.Windows.Forms.Label label6;
    }
}

