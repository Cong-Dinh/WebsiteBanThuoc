PGDMP                   	    |            Medicine_StoreDB    16.4    16.4 V    N           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            O           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            P           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Q           1262    18728    Medicine_StoreDB    DATABASE     �   CREATE DATABASE "Medicine_StoreDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 "   DROP DATABASE "Medicine_StoreDB";
                postgres    false            �            1259    18783    accounts    TABLE     �   CREATE TABLE public.accounts (
    accountid integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    customerid integer,
    roleid integer NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false            �            1259    18782    accounts_accountid_seq    SEQUENCE     �   CREATE SEQUENCE public.accounts_accountid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.accounts_accountid_seq;
       public          postgres    false    226            R           0    0    accounts_accountid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.accounts_accountid_seq OWNED BY public.accounts.accountid;
          public          postgres    false    225            �            1259    18802    cart    TABLE     �   CREATE TABLE public.cart (
    cartid integer NOT NULL,
    accountid integer,
    medicineid integer,
    quantity integer NOT NULL
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    18801    cart_cartid_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_cartid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.cart_cartid_seq;
       public          postgres    false    228            S           0    0    cart_cartid_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.cart_cartid_seq OWNED BY public.cart.cartid;
          public          postgres    false    227            �            1259    18730 
   categories    TABLE     v   CREATE TABLE public.categories (
    categoryid integer NOT NULL,
    categoryname character varying(255) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    18729    categories_categoryid_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_categoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.categories_categoryid_seq;
       public          postgres    false    216            T           0    0    categories_categoryid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.categories_categoryid_seq OWNED BY public.categories.categoryid;
          public          postgres    false    215            �            1259    18772 	   customers    TABLE     �   CREATE TABLE public.customers (
    customerid integer NOT NULL,
    fullname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phonenumber character varying(255),
    address character varying(255)
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    18771    customers_customerid_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_customerid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.customers_customerid_seq;
       public          postgres    false    224            U           0    0    customers_customerid_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.customers_customerid_seq OWNED BY public.customers.customerid;
          public          postgres    false    223            �            1259    18737    manufacturers    TABLE     �   CREATE TABLE public.manufacturers (
    manufacturerid integer NOT NULL,
    manufacturername character varying(255) NOT NULL,
    contactinfo character varying(255)
);
 !   DROP TABLE public.manufacturers;
       public         heap    postgres    false            �            1259    18736     manufacturers_manufacturerid_seq    SEQUENCE     �   CREATE SEQUENCE public.manufacturers_manufacturerid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.manufacturers_manufacturerid_seq;
       public          postgres    false    218            V           0    0     manufacturers_manufacturerid_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.manufacturers_manufacturerid_seq OWNED BY public.manufacturers.manufacturerid;
          public          postgres    false    217            �            1259    18746 	   medicines    TABLE     +  CREATE TABLE public.medicines (
    medicineid integer NOT NULL,
    name character varying(255) NOT NULL,
    categoryid integer,
    manufacturerid integer,
    price double precision NOT NULL,
    stockquantity integer NOT NULL,
    description character varying(255),
    expirationdate date
);
    DROP TABLE public.medicines;
       public         heap    postgres    false            �            1259    18745    medicines_medicineid_seq    SEQUENCE     �   CREATE SEQUENCE public.medicines_medicineid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.medicines_medicineid_seq;
       public          postgres    false    220            W           0    0    medicines_medicineid_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.medicines_medicineid_seq OWNED BY public.medicines.medicineid;
          public          postgres    false    219            �            1259    18843    orderdetails    TABLE     �   CREATE TABLE public.orderdetails (
    orderdetailid integer NOT NULL,
    orderid integer,
    medicineid integer,
    quantity integer NOT NULL,
    price double precision NOT NULL
);
     DROP TABLE public.orderdetails;
       public         heap    postgres    false            �            1259    18842    orderdetails_orderdetailid_seq    SEQUENCE     �   CREATE SEQUENCE public.orderdetails_orderdetailid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.orderdetails_orderdetailid_seq;
       public          postgres    false    234            X           0    0    orderdetails_orderdetailid_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.orderdetails_orderdetailid_seq OWNED BY public.orderdetails.orderdetailid;
          public          postgres    false    233            �            1259    18826    orders    TABLE     �   CREATE TABLE public.orders (
    orderid integer NOT NULL,
    accountid integer,
    orderdate timestamp without time zone NOT NULL,
    totalamount double precision NOT NULL,
    statusid integer NOT NULL
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    18825    orders_orderid_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_orderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_orderid_seq;
       public          postgres    false    232            Y           0    0    orders_orderid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_orderid_seq OWNED BY public.orders.orderid;
          public          postgres    false    231            �            1259    18765    roles    TABLE     `   CREATE TABLE public.roles (
    roleid integer NOT NULL,
    rolename character varying(255)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    18764    roles_roleid_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_roleid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.roles_roleid_seq;
       public          postgres    false    222            Z           0    0    roles_roleid_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.roles_roleid_seq OWNED BY public.roles.roleid;
          public          postgres    false    221            �            1259    18819    status    TABLE     e   CREATE TABLE public.status (
    statusid integer NOT NULL,
    statusname character varying(255)
);
    DROP TABLE public.status;
       public         heap    postgres    false            �            1259    18818    status_statusid_seq    SEQUENCE     �   CREATE SEQUENCE public.status_statusid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.status_statusid_seq;
       public          postgres    false    230            [           0    0    status_statusid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.status_statusid_seq OWNED BY public.status.statusid;
          public          postgres    false    229            �           2604    18786    accounts accountid    DEFAULT     x   ALTER TABLE ONLY public.accounts ALTER COLUMN accountid SET DEFAULT nextval('public.accounts_accountid_seq'::regclass);
 A   ALTER TABLE public.accounts ALTER COLUMN accountid DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    18805    cart cartid    DEFAULT     j   ALTER TABLE ONLY public.cart ALTER COLUMN cartid SET DEFAULT nextval('public.cart_cartid_seq'::regclass);
 :   ALTER TABLE public.cart ALTER COLUMN cartid DROP DEFAULT;
       public          postgres    false    228    227    228            }           2604    18733    categories categoryid    DEFAULT     ~   ALTER TABLE ONLY public.categories ALTER COLUMN categoryid SET DEFAULT nextval('public.categories_categoryid_seq'::regclass);
 D   ALTER TABLE public.categories ALTER COLUMN categoryid DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    18775    customers customerid    DEFAULT     |   ALTER TABLE ONLY public.customers ALTER COLUMN customerid SET DEFAULT nextval('public.customers_customerid_seq'::regclass);
 C   ALTER TABLE public.customers ALTER COLUMN customerid DROP DEFAULT;
       public          postgres    false    224    223    224            ~           2604    18740    manufacturers manufacturerid    DEFAULT     �   ALTER TABLE ONLY public.manufacturers ALTER COLUMN manufacturerid SET DEFAULT nextval('public.manufacturers_manufacturerid_seq'::regclass);
 K   ALTER TABLE public.manufacturers ALTER COLUMN manufacturerid DROP DEFAULT;
       public          postgres    false    217    218    218                       2604    18749    medicines medicineid    DEFAULT     |   ALTER TABLE ONLY public.medicines ALTER COLUMN medicineid SET DEFAULT nextval('public.medicines_medicineid_seq'::regclass);
 C   ALTER TABLE public.medicines ALTER COLUMN medicineid DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    18846    orderdetails orderdetailid    DEFAULT     �   ALTER TABLE ONLY public.orderdetails ALTER COLUMN orderdetailid SET DEFAULT nextval('public.orderdetails_orderdetailid_seq'::regclass);
 I   ALTER TABLE public.orderdetails ALTER COLUMN orderdetailid DROP DEFAULT;
       public          postgres    false    233    234    234            �           2604    18829    orders orderid    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN orderid SET DEFAULT nextval('public.orders_orderid_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN orderid DROP DEFAULT;
       public          postgres    false    232    231    232            �           2604    18768    roles roleid    DEFAULT     l   ALTER TABLE ONLY public.roles ALTER COLUMN roleid SET DEFAULT nextval('public.roles_roleid_seq'::regclass);
 ;   ALTER TABLE public.roles ALTER COLUMN roleid DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    18822    status statusid    DEFAULT     r   ALTER TABLE ONLY public.status ALTER COLUMN statusid SET DEFAULT nextval('public.status_statusid_seq'::regclass);
 >   ALTER TABLE public.status ALTER COLUMN statusid DROP DEFAULT;
       public          postgres    false    230    229    230            C          0    18783    accounts 
   TABLE DATA           U   COPY public.accounts (accountid, username, password, customerid, roleid) FROM stdin;
    public          postgres    false    226   �d       E          0    18802    cart 
   TABLE DATA           G   COPY public.cart (cartid, accountid, medicineid, quantity) FROM stdin;
    public          postgres    false    228   @e       9          0    18730 
   categories 
   TABLE DATA           >   COPY public.categories (categoryid, categoryname) FROM stdin;
    public          postgres    false    216   we       A          0    18772 	   customers 
   TABLE DATA           V   COPY public.customers (customerid, fullname, email, phonenumber, address) FROM stdin;
    public          postgres    false    224   �e       ;          0    18737    manufacturers 
   TABLE DATA           V   COPY public.manufacturers (manufacturerid, manufacturername, contactinfo) FROM stdin;
    public          postgres    false    218   g       =          0    18746 	   medicines 
   TABLE DATA           �   COPY public.medicines (medicineid, name, categoryid, manufacturerid, price, stockquantity, description, expirationdate) FROM stdin;
    public          postgres    false    220   �g       K          0    18843    orderdetails 
   TABLE DATA           [   COPY public.orderdetails (orderdetailid, orderid, medicineid, quantity, price) FROM stdin;
    public          postgres    false    234   �h       I          0    18826    orders 
   TABLE DATA           V   COPY public.orders (orderid, accountid, orderdate, totalamount, statusid) FROM stdin;
    public          postgres    false    232   i       ?          0    18765    roles 
   TABLE DATA           1   COPY public.roles (roleid, rolename) FROM stdin;
    public          postgres    false    222   mi       G          0    18819    status 
   TABLE DATA           6   COPY public.status (statusid, statusname) FROM stdin;
    public          postgres    false    230   �i       \           0    0    accounts_accountid_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.accounts_accountid_seq', 6, true);
          public          postgres    false    225            ]           0    0    cart_cartid_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.cart_cartid_seq', 5, true);
          public          postgres    false    227            ^           0    0    categories_categoryid_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.categories_categoryid_seq', 6, true);
          public          postgres    false    215            _           0    0    customers_customerid_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.customers_customerid_seq', 6, true);
          public          postgres    false    223            `           0    0     manufacturers_manufacturerid_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.manufacturers_manufacturerid_seq', 6, true);
          public          postgres    false    217            a           0    0    medicines_medicineid_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.medicines_medicineid_seq', 5, true);
          public          postgres    false    219            b           0    0    orderdetails_orderdetailid_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.orderdetails_orderdetailid_seq', 7, true);
          public          postgres    false    233            c           0    0    orders_orderid_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.orders_orderid_seq', 7, true);
          public          postgres    false    231            d           0    0    roles_roleid_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.roles_roleid_seq', 1, false);
          public          postgres    false    221            e           0    0    status_statusid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.status_statusid_seq', 6, true);
          public          postgres    false    229            �           2606    18788    accounts accounts_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (accountid);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    226            �           2606    19005    accounts accounts_username_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_username_key UNIQUE (username);
 H   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_username_key;
       public            postgres    false    226            �           2606    18807    cart cart_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (cartid);
 8   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_pkey;
       public            postgres    false    228            �           2606    18735    categories categories_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (categoryid);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    216            �           2606    18781    customers customers_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_email_key;
       public            postgres    false    224            �           2606    18779    customers customers_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (customerid);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    224            �           2606    18744     manufacturers manufacturers_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.manufacturers
    ADD CONSTRAINT manufacturers_pkey PRIMARY KEY (manufacturerid);
 J   ALTER TABLE ONLY public.manufacturers DROP CONSTRAINT manufacturers_pkey;
       public            postgres    false    218            �           2606    18753    medicines medicines_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.medicines
    ADD CONSTRAINT medicines_pkey PRIMARY KEY (medicineid);
 B   ALTER TABLE ONLY public.medicines DROP CONSTRAINT medicines_pkey;
       public            postgres    false    220            �           2606    18848    orderdetails orderdetails_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT orderdetails_pkey PRIMARY KEY (orderdetailid);
 H   ALTER TABLE ONLY public.orderdetails DROP CONSTRAINT orderdetails_pkey;
       public            postgres    false    234            �           2606    18831    orders orders_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    232            �           2606    18770    roles roles_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (roleid);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    222            �           2606    18824    status status_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (statusid);
 <   ALTER TABLE ONLY public.status DROP CONSTRAINT status_pkey;
       public            postgres    false    230            �           2606    18796 !   accounts accounts_customerid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_customerid_fkey FOREIGN KEY (customerid) REFERENCES public.customers(customerid);
 K   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_customerid_fkey;
       public          postgres    false    4754    224    226            �           2606    18791    accounts accounts_roleid_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_roleid_fkey FOREIGN KEY (roleid) REFERENCES public.roles(roleid);
 G   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_roleid_fkey;
       public          postgres    false    222    226    4750            �           2606    18808    cart cart_accountid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_accountid_fkey FOREIGN KEY (accountid) REFERENCES public.accounts(accountid);
 B   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_accountid_fkey;
       public          postgres    false    228    226    4756            �           2606    18813    cart cart_medicineid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_medicineid_fkey FOREIGN KEY (medicineid) REFERENCES public.medicines(medicineid);
 C   ALTER TABLE ONLY public.cart DROP CONSTRAINT cart_medicineid_fkey;
       public          postgres    false    228    4748    220            �           2606    18754 #   medicines medicines_categoryid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicines
    ADD CONSTRAINT medicines_categoryid_fkey FOREIGN KEY (categoryid) REFERENCES public.categories(categoryid);
 M   ALTER TABLE ONLY public.medicines DROP CONSTRAINT medicines_categoryid_fkey;
       public          postgres    false    4744    216    220            �           2606    18759 '   medicines medicines_manufacturerid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicines
    ADD CONSTRAINT medicines_manufacturerid_fkey FOREIGN KEY (manufacturerid) REFERENCES public.manufacturers(manufacturerid);
 Q   ALTER TABLE ONLY public.medicines DROP CONSTRAINT medicines_manufacturerid_fkey;
       public          postgres    false    218    220    4746            �           2606    18854 )   orderdetails orderdetails_medicineid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT orderdetails_medicineid_fkey FOREIGN KEY (medicineid) REFERENCES public.medicines(medicineid);
 S   ALTER TABLE ONLY public.orderdetails DROP CONSTRAINT orderdetails_medicineid_fkey;
       public          postgres    false    234    220    4748            �           2606    18849 &   orderdetails orderdetails_orderid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT orderdetails_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.orders(orderid);
 P   ALTER TABLE ONLY public.orderdetails DROP CONSTRAINT orderdetails_orderid_fkey;
       public          postgres    false    4764    232    234            �           2606    18837    orders orders_accountid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_accountid_fkey FOREIGN KEY (accountid) REFERENCES public.accounts(accountid);
 F   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_accountid_fkey;
       public          postgres    false    226    232    4756            �           2606    18832    orders orders_statusid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_statusid_fkey FOREIGN KEY (statusid) REFERENCES public.status(statusid);
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_statusid_fkey;
       public          postgres    false    230    232    4762            C   R   x�5�;
�0E���b����@,,�� ����.\#��`Q�
&���:CH?�Da�;ƙZ���C��~�{�����n      E   '   x�3�4�4�4�2�4��L@$�1�)��4����� Tse      9   l   x�3��(}�{b�Bz��]�s�LL,�2��fg^���P����e��Y�����PvxP&,���p��.����@���ër�L���`}�`kr�Z42F��� ��8|      A     x�m�1K�@���S�(!w�k��M�V[E!8��1$�䵔Vt'����� ��1��q���3B�wp����)�%�;Y> ��� �;ƛ�~|�<6�Ye�]�炚H��z��3&d��r����!��9�O�Bn_��,��E��4��Gݞ�6g��B��e忨_}6�2L!�ar���g���If�N��u�-�U�qZ}Y�e��� �^���m׀y������@+���X�:��kuw��S�j �� ����'�5|e�����      ;   �   x�3�t>�%/]��R��؆��'+d<ܵ2W��Ó3=#�!�"1� 'U/9?WGA����������Ą��^/oά�L����\�8����s���c��43�2��7 0����S/D��9�)N��!���%��z!:-,�b���� *�l�      =   �   x�u�;N1�k�s#?�@��("*c���ڎ���	���cE���"��`[���T3���1t��7�r�F,���"�zm�8*��>��n~�#�i�!N�$��0G�.쭶um=��I�/��̣�������K"(�ަ���
�sW!�8
O}�h�t��]�&���3q:�%��0�����6�i�/L�o�S�P��wbK���Iu�+��T���*��d�&N��:�]f����7�\v�      K   3   x�%�� 0���*��M����ɲ/%��Ƹj�h�I��1&j�i��xX
      I   V   x�M̻�0C�ڞ��#�S�Y�HR�F�=z��s4�s��wcv���t�8�~_��<�a���;_����|��s����I      ?       x�3�tL����2�t.-.��M-����� Um      G   o   x�3�<2!1/]����
9��rqz�^��P�$3��9���V(y�{�Br���3�L�Z��Z�,�|��9��(|x�Bzfb�Ho:������+�������� �./p     